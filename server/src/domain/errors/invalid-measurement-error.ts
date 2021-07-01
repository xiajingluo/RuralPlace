import { BaseError } from './base-error';

export class InvalidMeasurementError extends BaseError {
  statusCode = 400;
  message = 'Medida de venda inválida';

  constructor() {
    super('Medida de venda inválida');

    Object.setPrototypeOf(this, InvalidMeasurementError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message
      }
    ];
  }
}
