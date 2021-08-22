import shuffle from 'lodash/shuffle';

/**
 * Determines groupings but unshuffled
 * 
 * @param {*} num 
 * @returns 
 */
const determineGroupingsUnshuffled = (num) => {
  // Number of 4 pairings that should be there
  const numberOfTables = Math.ceil(num / 4);
  // Number of tables we need to make 3 pairings
  const numberOfThreePairings = (4 - num % 4) % 4;
  // Return an array of 4s and 3s
  return [...Array(numberOfTables)].map((_, idx) => idx < numberOfThreePairings ? 3 : 4);
};

/**
 * Determines groupings based off num of 4s and 3s. Also shuffles the array because we don't care what tables have 3 or 4 players
 * Example: num = 17. groupings = [4, 4, 3, 3, 3]
 * 
 * @param {*} num 
 */
export const determineGroupings = (num) => {
  return shuffle(determineGroupingsUnshuffled(num));
};