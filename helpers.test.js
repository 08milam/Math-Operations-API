const { findMean, findMedian, findMode } = require("./helpers"); // Import the functions to be tested from "./helpers"

describe("#findMedian", function () {
  it("finds the median of an even set", function () {
    // Test case: Calculate the median of an even-sized array
    expect(findMedian([1, -1, 4, 2])).toEqual(1.5); // The expected result is 1.5
  });
  it("finds the median of an odd set", function () {
    // Test case: Calculate the median of an odd-sized array
    expect(findMedian([1, -1, 4])).toEqual(1); // The expected result is 1
  });
});

describe("#findMean", function () {
  it("finds the mean of an empty array", function () {
    // Test case: Calculate the mean of an empty array
    expect(findMean([])).toEqual(0); // The expected result is 0
  });
  it("finds the mean of an array of numbers", function () {
    // Test case: Calculate the mean of an array of numbers
    expect(findMean([1, -1, 4, 2])).toEqual(1.5); // The expected result is 1.5
  });
});

describe("#findMode", function () {
  it("finds the mode", function () {
    // Test case: Calculate the mode of an array with a mode value
    expect(findMode([1, 1, 1, 2, 2, 3])).toEqual(1); // The expected result is 1
  });
});
