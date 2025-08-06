const requestLogger =(req, res, next) => {
    const timeStamp = new Date().toISOString();
    const method = req.method;
    const url = req.Url;
    const UserAgent = req.get('user-agent');
    console.log(`[${timeStamp}] ${method} ${url} - ${UserAgent}`);
    next();
}
const addtimestamp = (req, res, next) => {
    req.timestamp = new Date().toISOString();
    next();
}
module.exports = {requestLogger, addtimestamp};