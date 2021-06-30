import { BaseError } from './base-error';

export class InvalidTelephoneError extends BaseError {
  statusCode = 400;
  message = 'Número de telefone está em um formato errado';

  constructor() {
    super('Número de telefone está em um formato errado');

    Object.setPrototypeOf(this, InvalidTelephoneError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message
      }
    ];
  }
}
