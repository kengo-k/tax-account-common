export abstract class ApplicationError extends Error {
  public abstract HTTP_CODE: number;
}
