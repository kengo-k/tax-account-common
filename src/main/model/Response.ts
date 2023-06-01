export interface SuccessResponse {
  success: true;
  body: any;
}

export interface ErrorResponse {
  success: false;
  error: Error;
}

export type Response = SuccessResponse | ErrorResponse;
