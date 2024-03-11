class ApiResponce {
  constructor(statusCode, message = "Success", data) {
    this.statusCode = statusCode;
    this.success = true;
    this.message = message;
    this.data = data;
  }
}

module.exports = ApiResponce;
