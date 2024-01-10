// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  // Handle other types of errors
  res.status(500).json({ error: err.message });
};

module.exports = errorHandler;
