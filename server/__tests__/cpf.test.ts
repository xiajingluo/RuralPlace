import { CPF } from '../src/domain/cpf';

describe('CPF Validation', () => {
  test('Should accept valid CPF', () => {
    expect(CPF.validate('111.222.333-44')).toBe(true);
  });

  test('Should not accept invalid CPF', () => {
    expect(CPF.validate('111.111.111.11')).toBe(false);
  });

  test('Should be invalid as it does not contain the correct structure', () => {
    expect(CPF.validate('123.123.123.12')).toBe(false);

    expect(CPF.validate('123-123-123-12')).toBe(false);

    expect(CPF.validate('12341234123412')).toBe(false);
  });

  test('Should be invalid because it doesnt contain enough size', () => {
    expect(CPF.validate('123456789')).toBe(false);

    expect(CPF.validate('12345678911')).toBe(false);
  });

  test('Should create a valid CPF', () => {
    expect(CPF.create('111.222.333-44')).toBeInstanceOf(CPF);
  });

  test('Shoul throw a Invalid CPF Error', () => {
    expect(() => {
      CPF.create('123-123-123-45');
    }).toThrowError('CPF possui um formato inválido');
  });
});
