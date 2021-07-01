import { Measurement } from './measurement';

export default class Product {
  private readonly _name: string;
  private readonly _price: number;
  private readonly _quantity: number;
  private readonly _measurement: Measurement;
}
