import { BaseError } from './base-error';

export class InvalidEmailError extends BaseError {
  statusCode = 400;
  message = 'Email possui um formato inválido';

  constructor() {
    super('Email possui um formato inválido');

    Object.setPrototypeOf(this, InvalidEmailError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message
      }
    ];
  }
}
