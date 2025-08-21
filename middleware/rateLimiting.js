const rateLimit = require('express-rate-limit');
const createBasicRateLimiter =(maxreq,time) =>{

    return rateLimiter({
        max: maxreq,
        windowMs: time,
        message: "maximum request limit reached try after 15 mins",
        standardHeader :true,
        legacyHeaders:false,
    })
}

module.exports ={createBasicRateLimiter};