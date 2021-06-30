import { BaseError } from './base-error';

export class InvalidRGError extends BaseError {
  statusCode = 400;
  message = 'RG possui um formato inválido';

  constructor() {
    super('RG possui um formato inválido');

    Object.setPrototypeOf(this, InvalidRGError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message
      }
    ];
  }
}
