// custom error handler middleware

class ApiError extends Error {
    constructor( message, statusCode){
        super(message);
        this.satusCode =statusCode;
        this.name ="ApiError";
    }
}
 const asyncHandler = (fn) =>(req,res,next) =>{
    Promise.resolve(fn(req,res,next)).catch(next)
 }
 const gogbalErrorhandler =(err,req,res,next) =>{
    console.error(err.stack);
    if(err instanceof ApiError){
        return res.status(err.statusCode).json({
            status : 'Api Error found',
            message : err.message
        })
    }
    
 }