// Import required modules and initialize Express app
const express = require("express");
const app = express();
const ExpressError = require("./expressError");

// Import helper functions for calculations
const {
  convertAndValidateNumsArray,
  findMode,
  findMean,
  findMedian,
} = require("./helpers");

// Middleware to handle requests for the '/mean' endpoint
app.get("/mean", function (req, res, next) {
  if (!req.query.nums) {
    // Check if 'nums' query parameter is missing
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let numsAsStrings = req.query.nums.split(",");
  // Convert and validate the comma-separated string of numbers
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    // If conversion/validation fails, throw an ExpressError
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mean",
    result: findMean(nums), // Calculate the mean
  };

  return res.send(result); // Send the result as a response
});

// Middleware to handle requests for the '/median' endpoint
app.get("/median", function (req, res, next) {
  if (!req.query.nums) {
    // Check if 'nums' query parameter is missing
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let numsAsStrings = req.query.nums.split(",");
  // Convert and validate the comma-separated string of numbers
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    // If conversion/validation fails, throw an ExpressError
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "median",
    result: findMedian(nums), // Calculate the median
  };

  return res.send(result); // Send the result as a response
});

// Middleware to handle requests for the '/mode' endpoint
app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    // Check if 'nums' query parameter is missing
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let numsAsStrings = req.query.nums.split(",");
  // Convert and validate the comma-separated string of numbers
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    // If conversion/validation fails, throw an ExpressError
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mode",
    result: findMode(nums), // Calculate the mode
  };

  return res.send(result); // Send the result as a response
});

// Middleware to handle 'Not Found' (404) errors
app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  // Pass the error to the next piece of middleware
  return next(err);
});

// General error handler for other errors (status code 500)
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  // Send a JSON response with error details
  return res.json({
    error: err,
    message: err.message,
  });
});

// Start the Express server on port 3000
app.listen(3000, function () {
  console.log(`Server starting on port 3000`);
});
