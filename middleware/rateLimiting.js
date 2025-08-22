const rateLimit = require("express-rate-limit");
const createBasicRateLimiter = (maxreq, time) => {
  return rateLimit({
    max: maxreq,
    windowMs: time,
    message: "maximum request limit reached try after 15 mins",
    standardHeaders: true,
    legacyHeaders: false,
  });
};

module.exports = { createBasicRateLimiter };
