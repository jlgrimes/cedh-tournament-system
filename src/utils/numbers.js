const determineGroupingsUnshuffled = (num) => {
  if (num % 4 === 0) {
    return [...Array(num / 4)].map(_ => 4);
  } 

  let groupsOfFour = num / 4;

  if (groupsOfFour === 0) {
    return 
  }
};

/**
 * Determines groupings based off num of 4s and 3s.
 * Example: num = 17. groupings = [4, 4, 3, 3, 3]
 * 
 * @param {*} num 
 */
export const determineGroupings = (num) => {
  
};