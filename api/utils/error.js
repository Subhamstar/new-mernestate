export const errorHandler=(statusCode,message)=>{  //created beacuase for no error but when we crreate error like passoerd is too short etc
    const error=new Error();
    error.statusCode=statusCode;
    error.message=message;
    return error;
}