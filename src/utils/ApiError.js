class ApiError extends Error {
    constructor(
        statusCode,
        message="Somthing went wrong",
        errors=[],
        statck =""

    ){
       super(message);
       this.statusCode=statusCode
       this.data=null
       this.errors=errors
       this.message=message
       this.sussess=false


       if(statck){
        this.statck=statck
       }else{
        Error.captureStackTrace(this,this.constructor)
       }
    }
}
export {ApiError}