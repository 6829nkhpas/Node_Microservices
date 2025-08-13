const apiVersoning = (version) => (req, res, next) => {
     if(req.url.includes(`/api/v${version}`)){
        return next();
     }
     res.status(404).json({
        success: false,
        message: `API version ${version} not found`
     });
}
 const headerVersioning = (version) => (req, res, next) => {
    const header = req.headers['accept-version'];
    if(header === version){
        return next();
    }
    res.status(404).json({
        success: false,
        message: `API version ${version} not found`
    });
 }