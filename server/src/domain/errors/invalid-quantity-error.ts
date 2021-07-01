import { BaseError } from './base-error';

export class InvalidQuantityError extends BaseError {
  statusCode = 400;
  message = 'Informe uma quantidade válida';

  constructor() {
    super('Informe uma quantidade válida');

    Object.setPrototypeOf(this, InvalidQuantityError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message
      }
    ];
  }
}
