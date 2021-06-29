import { BaseError } from './base-error';

export class InvalidCPFError extends BaseError {
  statusCode = 400;
  message = 'CPF possui um formato inválido';

  constructor() {
    super('CPF possui um formato inválido');

    Object.setPrototypeOf(this, InvalidCPFError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message
      }
    ];
  }
}
