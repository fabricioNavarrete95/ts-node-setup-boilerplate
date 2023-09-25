class Logger {
  static log(message: string) {
    console.log(message);
    return message;
  }
}

Logger.log("hello world!");

export default Logger;
