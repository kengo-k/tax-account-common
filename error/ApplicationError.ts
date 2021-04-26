export abstract class ApplicationError extends Error {
  public abstract HTTP_CODE: number;
  public abstract ERROR_MESSAGE: string;
}

export class RequestError extends ApplicationError {
  public HTTP_CODE = 400;
  public ERROR_MESSAGE;
  public constructor(message: string) {
    super();
    this.ERROR_MESSAGE = message;
  }
}

export class NotFoundError extends ApplicationError {
  public HTTP_CODE = 404;
  public ERROR_MESSAGE;
  public constructor(message: string) {
    super();
    this.ERROR_MESSAGE = message;
  }
}
