import { BaseError } from './base-error';

export class InvalidPriceError extends BaseError {
  statusCode = 400;
  message = 'Preço possuí um formato inválido';

  constructor() {
    super('Preço possuí um formato inválido');

    Object.setPrototypeOf(this, InvalidPriceError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message
      }
    ];
  }
}
