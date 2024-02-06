/**
 * Create a frequency counter object for an array.
 * @param {Array} arr - The input array.
 * @returns {Object} - A frequency counter object.
 */
function createFrequencyCounter(arr) {
  return arr.reduce(function (acc, next) {
    // If 'next' is already a property in 'acc', increment its count; otherwise, initialize it to 1.
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

/**
 * Find the mode (most frequent element) of an array.
 * @param {Array} arr - The input array.
 * @returns {number} - The mode of the array.
 */
function findMode(arr) {
  let freqCounter = createFrequencyCounter(arr); // Create a frequency counter for the input array

  let count = 0; // Initialize the count of the most frequent element
  let mostFrequent; // Initialize the most frequent element

  for (let key in freqCounter) {
    // Iterate through the keys in the frequency counter
    if (freqCounter[key] > count) {
      // If the current key's count is greater than the previous maximum count
      mostFrequent = key; // Update the most frequent element
      count = freqCounter[key]; // Update the maximum count
    }
  }

  return +mostFrequent; // Convert the most frequent element to a number and return it as the mode
}

/**
 * Convert an array of strings to an array of numbers and validate them.
 * @param {Array} numsAsStrings - An array of string representations of numbers.
 * @returns {Array|Error} - An array of valid numbers or an Error if validation fails.
 */
function convertAndValidateNumsArray(numsAsStrings) {
  let result = []; // Initialize an array to store valid numbers

  for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNumber = Number(numsAsStrings[i]); // Convert each string to a number

    if (Number.isNaN(valToNumber)) {
      // Check if the conversion resulted in NaN (Not-a-Number)
      return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      ); // Return an Error if validation fails
    }

    result.push(valToNumber); // Push the valid number to the result array
  }
  return result; // Return the array of valid numbers
}

/**
 * Calculate the mean (average) of an array of numbers.
 * @param {Array} nums - An array of numbers.
 * @returns {number} - The mean of the numbers.
 */
function findMean(nums) {
  if (nums.length === 0) return 0; // Return 0 if the input array is empty
  return (
    nums.reduce(function (acc, cur) {
      return acc + cur;
    }) / nums.length
  ); // Calculate the mean by summing all numbers and dividing by the count
}

/**
 * Calculate the median of an array of numbers.
 * @param {Array} nums - An array of numbers.
 * @returns {number} - The median of the numbers.
 */
function findMedian(nums) {
  nums.sort((a, b) => a - b); // Sort the input array in ascending order

  let middleIndex = Math.floor(nums.length / 2); // Find the middle index

  let median;

  if (nums.length % 2 === 0) {
    // If the array has an even length
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2; // Calculate the average of the two middle elements
  } else {
    median = nums[middleIndex]; // Otherwise, the median is the middle element
  }
  return median; // Return the calculated median
}

module.exports = {
  createFrequencyCounter,
  findMean,
  findMedian,
  findMode,
  convertAndValidateNumsArray,
};
