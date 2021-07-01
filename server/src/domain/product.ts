import { InvalidPriceError } from './errors/invalid-price-error';
import { InvalidQuantityError } from './errors/invalid-quantity-error';
import { Measurement } from './measurement';

export class Product {
  private readonly _name: string;
  private readonly _price: number;
  private readonly _quantity: number;
  private readonly _measurement: Measurement;

  constructor(
    name: string,
    price: number,
    quantity: number = 1,
    measurement: string
  ) {
    this._name = name;
    this._price = this.validatePrice(price);
    this._quantity = this.validateQuantity(quantity);
    this._measurement = Measurement.create(measurement);
  }

  private validatePrice(price: number): number {
    if (price < 0.009) {
      throw new InvalidPriceError();
    }
    return price;
  }

  private validateQuantity(quantity: number): number {
    if (quantity < 0) {
      throw new InvalidQuantityError();
    }
    return quantity;
  }

  get formatPrice(): string {
    return this._price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}
