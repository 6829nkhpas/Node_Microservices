const cors = require('cors');

 const configuration= () =>{
    return cors({
        origin: (origin, callback) => {
            const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];
            if (allowedOrigins.includes(origin) || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization','Accept-Version'],
        credentials: true,
        maxAge: 600,
        preflightContinue: false,
        optionsSuccessStatus: 204,
        exposedHeaders: ['Content-Range', 'X-Total-Count'],
        optionsSuccessStatus: 204,
  
    })
 }
 
 module.exports = configuration;