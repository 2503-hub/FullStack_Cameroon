const errorHandler = (err, req, res, next) => {
  // Only log full stack in development
  if (process.env.NODE_ENV !== "production") {
    console.error(err.stack);
  } else {
    console.error(err.message);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server error",
  });
};

export default errorHandler;