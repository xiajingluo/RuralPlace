import { TelephoneNumber } from '../src/domain/telephoneNumber';

describe('Telephone validation', () => {
  test('Should accept valid Telephone', () => {
    expect(TelephoneNumber.validate('84998059100')).toBe(true);

    expect(TelephoneNumber.validate('8499805-9100')).toBe(true);
  });

  test('Should not accept invalid Telephone', () => {
    expect(TelephoneNumber.validate('998059100')).toBe(false);

    expect(TelephoneNumber.validate(null)).toBe(false);

    expect(TelephoneNumber.validate(undefined)).toBe(false);

    expect(TelephoneNumber.validate('(84) 99805-9100')).toBe(false);
  });

  test('Should create a valid Telephone', () => {
    expect(TelephoneNumber.create('84998059100')).toBeInstanceOf(
      TelephoneNumber
    );

    expect(TelephoneNumber.create('8499805-9100')).toBeInstanceOf(
      TelephoneNumber
    );
  });

  test('Should throw a Invalid Telephone Error', () => {
    expect(() => {
      TelephoneNumber.create('(84)99805-9100');
    }).toThrowError('Número de telefone está em um formato errado');
  });
});
