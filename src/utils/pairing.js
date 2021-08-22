import shuffle from 'lodash/shuffle';
import { determineGroupings } from './numbers';

/**
 * Gets the total points that a single player has
 * 
 * @param {*} player 
 * @returns 
 */
export const getTotalPoints = player => {
  if (!player.rounds) {
    return 0;
  }

  return player.rounds.reduce((acc, curr) => acc + curr.points, 0);
};

/**
 * Generates the point rank object for all players
 * 
 * @param {*} players 
 * @returns 
 */
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

/**
 * Scrambles point ranks array
 * 
 * @param {*} pointRanks 
 * @returns 
 */
const getPointRanksShuffled = pointRanks => Object.entries(pointRanks).reduce((acc, [key, val]) => {
  return {
    ...acc,
    [key]: shuffle(val)
  };
}, {});

/**
 * Flatten point ranks object into array
 * 
 * @param {*} pointRanks 
 * @returns 
 */
const flattenPointRanks = pointRanks => Object.values(pointRanks).reduce((acc, curr) => [...acc, ...curr], []);

/**
 * Generates pairings from a list of players from Redux store
 * 
 * @param {*} players 
 * @returns 
 */
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

/**
 * Updates the player's round data with points they've recieved after the round
 * 
 * @param {*} players 
 * @param {*} currentRoundPoints 
 * @param {*} roundNumber 
 * @returns 
 */
export const updatePlayerRoundData = (players, currentRoundPoints, roundNumber) => {
  return players.map((player) => ({
    ...player,
    rounds: [
      ...(player.rounds ?? []),
      {
        id: roundNumber,
        points: currentRoundPoints[player.id]
      }
    ]
  }));
};