// Define a custom ExpressError class that extends the built-in Error class
class ExpressError extends Error {
  /**
   * Constructor for creating an instance of ExpressError.
   * @param {string} message - The error message.
   * @param {number} status - The HTTP status code associated with the error.
   */
  constructor(message, status) {
    super(); // Call the constructor of the parent class (Error)

    this.message = message; // Set the error message property
    this.status = status; // Set the HTTP status code property
    console.error(this.stack); // Log the error stack trace to the console
  }
}

module.exports = ExpressError; // Export the ExpressError class for use in other modules
