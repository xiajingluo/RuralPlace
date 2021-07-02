import { BaseError } from './base-error';

export class NotHaveProductError extends BaseError {
  statusCode = 404;
  message = 'Não foi possível encontrar o Produto em questão';

  constructor() {
    super('Não foi possível encontrar o Produto em questão');

    Object.setPrototypeOf(this, NotHaveProductError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message
      }
    ];
  }
}
