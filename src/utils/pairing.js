import shuffle from 'lodash/shuffle';

export const getTotalPoints = player => {
  return player.rounds.reduce((acc, curr) => acc + curr.points, 0);
};

const getPointRanks = players => players.reduce((acc, player) => {
  const playerPoints = getTotalPoints(player);

  return {
    ...acc,
    [playerPoints]: [
      ...(acc[playerPoints] ?? []),
      player
    ]
  };
}, {});

const getPointRanksShuffled = pointRanks => Object.entries(pointRanks).reduce((acc, [key, val]) => {
  return {
    ...acc,
    [key]: shuffle(val)
  };
}, {});

export const assignNextRoundPairings = (players, round) => {
  const pointRanks = getPointRanks(players);
  const pointRanksShuffled = getPointRanksShuffled(pointRanks);

  console.log(pointRanksShuffled)
};