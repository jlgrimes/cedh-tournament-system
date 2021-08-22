import shuffle from 'lodash/shuffle';
import { determineGroupings } from './numbers';

export const getTotalPoints = player => {
  if (!player.rounds) {
    return 0;
  }

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

const flattenPointRanks = pointRanks => Object.values(pointRanks).reduce((acc, curr) => [acc, ...curr]);

export const getPairings = (players) => {
  const pointRanks = getPointRanks(players);
  const pointRanksShuffled = getPointRanksShuffled(pointRanks);
  const sortedPlayers = flattenPointRanks(pointRanksShuffled);
  const groupings = determineGroupings(sortedPlayers.length);

  let indexInGrouping = 0, indexThroughoutGroupings = 0;

  return sortedPlayers.reduce((acc, player) => {
    if (indexInGrouping === groupings[indexThroughoutGroupings]) {
      indexInGrouping = 0;
      indexThroughoutGroupings += 1;

      return [
        ...acc,
        [ player ]
      ];
    }

    acc[indexThroughoutGroupings] = [
      ...(acc[indexThroughoutGroupings] ?? []),
      player
    ];

    indexInGrouping += 1;

    return acc;
  }, []);
};