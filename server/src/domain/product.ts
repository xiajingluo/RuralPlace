import { InvalidPriceError } from './errors/invalid-price-error';
import { InvalidQuantityError } from './errors/invalid-quantity-error';
import { NotHaveProductError } from './errors/not-have-product-error';
import { Measurement } from './measurement';

export class Product {
  private _name: string;
  private _price: number;
  private _quantity: number;
  private _measurement: string;

  constructor(
    name: string,
    price: number,
    quantity: number = 1,
    measurement: string
  ) {
    this._name = name;
    this._price = this.validatePrice(price);
    this._quantity = this.validateQuantity(quantity);
    this._measurement = Measurement.create(measurement).value;
  }

  private validatePrice(price: number): number {
    if (price < 0.009) {
      throw new InvalidPriceError();
    }
    return price;
  }

  private validateQuantity(quantity: number): number {
    if (!Number.isInteger(quantity)) {
      throw new InvalidQuantityError();
    }

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

  get quantities(): number {
    return this._quantity;
  }

  public setQuantityToReduce(quantityToReduce: number): void {
    if (quantityToReduce > this._quantity) {
      throw new NotHaveProductError();
    }

    this._quantity -= quantityToReduce;
  }
}
