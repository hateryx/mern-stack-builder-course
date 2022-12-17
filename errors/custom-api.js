class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    //(version 1 until creation of class BadRequestError)
    //this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default CustomAPIError;
