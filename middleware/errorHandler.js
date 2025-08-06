// custom error handler middleware

class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ApiError";
  }
}

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const gogbalErrorhandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      status: "Api Error found",
      message: err.message,
    });
  } else if (err.name === "ValidationError") {
    return res.status(400).json({
      status: "Validation Error",
      message: err.message,
    });
  } else {
    return res.status(500).json({
      status: "Internal Server Error",
      message: err.message,
    });
  }
};

module.exports = {
  asyncHandler,
  ApiError,
  gogbalErrorhandler,
};
