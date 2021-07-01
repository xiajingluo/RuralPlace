import { Email } from '../src/domain/email';

describe('Email validation', () => {
  test('Should accept valid Email', () => {
    expect(Email.validate('teste@teste.com')).toBe(true);
  });

  test('Should be return a value of Email in string', () => {
    const email = Email.create('test@test.com');

    expect(email.value).toBe('test@test.com');
    expect(typeof email.value).toBe('string');
  });

  test('Should not accept invalid Email', () => {
    expect(Email.validate('teste.com')).toBe(false);

    expect(Email.validate('tes@tes')).toBe(false);
  });

  test('Should create a valid Email', () => {
    expect(Email.create('teste@teste.com')).toBeInstanceOf(Email);
  });

  test('Should throw a Invalid Email Error', () => {
    expect(() => {
      Email.create('tes.com');
    }).toThrowError('Email possui um formato inválido');
  });
});
