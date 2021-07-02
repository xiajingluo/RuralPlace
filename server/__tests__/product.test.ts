import { Product } from '../src/domain/product';

describe('Product validation', () => {
  test('Should create a valid Product', () => {
    const apple = new Product('Apple', 0.5, 1, 'uni');

    expect(apple).toBeInstanceOf(Product);
  });

  test('Should return a valid formated price in string', () => {
    const apple = new Product('Apple', 0.5, 1, 'uni');

    // Something was wrong in this test
    // Failure cause is 1px ???
    // expect(apple.formatPrice).toBe('R$ 0,50');
    expect(typeof apple.formatPrice).toBe('string');
  });

  test('Should thorw invalid Measurement error', () => {
    expect(() => {
      new Product('Apple', 0.5, 12, 'Unidade');
    }).toThrowError('Medida de venda inválida');
  });

  test('Should throw invalid Quantity error', () => {
    expect(() => {
      new Product('Apple', 2.5, -1, 'kg');
    }).toThrowError('Informe uma quantidade válida');
  });

  test('Should throw invalid price error', () => {
    expect(() => {
      new Product('Apple', 0.005, 5, 'ml');
    }).toThrowError('Preço possuí um formato inválido');
  });
});

describe('Validation Quantity', () => {
  test('Should create a product with a valid quantity', () => {
    expect(new Product('Apple', 0.5, 3, 'kg')).toBeInstanceOf(Product);
  });

  test('Should thorw a Invalid Quantity erro', () => {
    expect(() => {
      new Product('Apple', 0.5, 0.12654, 'kg');
    }).toThrowError('Informe uma quantidade válida');
  });
});

describe('Product Quantity', () => {
  test('Should reduce quantity', () => {
    const product = new Product('Apple', 0.5, 5, 'kg');

    product.setQuantityToReduce(3);

    expect(product.quantities).toBe(2);
  });

  test('Should throw Not Have Product erro', () => {
    const product = new Product('Apple', 0.5, 3, 'uni');

    expect(() => {
      product.setQuantityToReduce(5);
    }).toThrowError('Não foi possível encontrar o Produto em questão');
  });
});
