import shuffle from 'lodash/shuffle';
import orderBy from 'lodash/orderBy';
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

  let runningSum = 0;
  return groupings.reduce((acc, grouping) => {
    const newAcc = [
      ...acc,
      sortedPlayers.slice(runningSum, runningSum + grouping)
    ];
    runningSum += grouping;
    return newAcc;
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

/**
 * Gets sorted standings
 * @param {*} players 
 * @returns 
 */
export const getStandings = (players) => {
  return orderBy(players, (player) => getTotalPoints(player), 'desc')
};

/**
 * Gets pairings for the final round
 * 
 * @param {*} players 
 * @returns 
 */
export const getFinalRoundPairings = (players) => {
  return [players.slice(0, 4)];
};