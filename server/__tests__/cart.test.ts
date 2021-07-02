import { Cart } from '../src/domain/cart';
import { Product } from '../src/domain/product';

describe('Cart Validation', () => {
  test('Add product to cart', () => {
    const cart = new Cart();

    const apple = new Product('Apple', 0.5, 2, 'kg');
    const banana = new Product('Banana', 0.25, 3, 'kg');
    const milk = new Product('Milk', 5.5, 500, 'mL');

    cart.addProduct(apple);
    cart.addProduct(banana);
    cart.addProduct(milk);

    expect(cart.products).toStrictEqual([apple, banana, milk]);
  });
});
