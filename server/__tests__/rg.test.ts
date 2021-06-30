import { RG } from '../src/domain/rg';

describe('RG Validation', () => {
  test('Should accept valid RG', () => {
    expect(RG.validate('111.222.333')).toBe(true);

    expect(RG.validate('11.222.333-4')).toBe(true);

    expect(RG.validate('11.222.333-x')).toBe(true);
  });

  test('Should not accept invalid RG', () => {
    expect(RG.validate('111-111-111-x')).toBe(false);

    expect(RG.validate('111-111-111')).toBe(false);

    expect(RG.validate(null)).toBe(false);

    expect(RG.validate(undefined)).toBe(false);

    expect(RG.validate('11.234-123-x')).toBe(false);
  });

  test('Should be invalid RG because it doesnt contain enough size', () => {
    expect(RG.validate('123456789')).toBe(false);

    expect(RG.validate('12345678911')).toBe(false);
  });

  test('Should create a valid RG', () => {
    expect(RG.create('11.222.333-X')).toBeInstanceOf(RG);

    expect(RG.create('111.222.333')).toBeInstanceOf(RG);

    expect(RG.create('11.222.333-4')).toBeInstanceOf(RG);
  });

  test('Should throw a Invalid RG Error', () => {
    expect(() => {
      RG.create('123-123-123');
    }).toThrowError('RG possui um formato inválido');

    expect(() => {
      RG.create('111-111-111-x');
    }).toThrowError('RG possui um formato inválido');

    expect(() => {
      RG.create('11.234-123-x');
    }).toThrowError('RG possui um formato inválido');
  });
});
