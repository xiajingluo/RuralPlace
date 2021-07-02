import { Product } from './product';

export class Cart {
  private _products: Array<Product> = [];

  constructor() {}

  public addProduct(product: Product) {
    this._products.push(product);
  }

  get products(): Array<Product> {
    return this._products;
  }
}
