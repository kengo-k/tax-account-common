import { SystemError } from "@common/error/SystemError";

export class SQLError extends SystemError {
  constructor(public error: Error) {
    super(error);
  }
}
