require('dotenv').config();
const {requestLogger, addtimestamp} = require('./middleware/customMiddleware.js');
const express = require('express');
const configuration = require('./config/config.js');
const {gogbalErrorhandler,asyncHandler,ApiError} = require('./middleware/errorHandler.js');
const {headerVersioning,contentTypeVersioning,apiVersoning} = require('./middleware/apiVersoning.js');
const app = express();

const PORT = process.env.PORT || 3000;
//express jason middleware
app.use(requestLogger);
app.use(addtimestamp);
app.use(configuration);
app.use(express.json());

app.use("/api/v1", apiVersoning("v1"));

app.use(gogbalErrorhandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})