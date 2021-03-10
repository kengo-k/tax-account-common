export class SystemError extends Error {
  public HTTP_CODE = 500;
  public ERROR_TYPE: string;
  public ERROR_MESSAGE: string;
  public ERROR_STACK: string;
  public constructor(public error: Error) {
    super();
    this.ERROR_TYPE = this.constructor.name;
    this.ERROR_MESSAGE = error.message;
    this.ERROR_STACK = error.stack ?? "";
  }
}
