import { Consumer } from '../src/domain/consumer';

describe('Consumer creation', () => {
  test('Should create a valid Consumer', () => {
    const luan = new Consumer(
      'Luan',
      'de Souza',
      '123.123.123-45',
      '123.123.123',
      '84998059100',
      'test@test.com'
    );
    const gilmar = new Consumer(
      'Gilmar',
      'da Silva',
      '123.123.123-12',
      '11.222.333-X',
      '84994465651',
      'test@test.com'
    );

    expect(luan).toBeInstanceOf(Consumer);
    expect(luan.fullName).toBe('Luan de Souza');

    expect(gilmar).toBeInstanceOf(Consumer);
    expect(gilmar.fullName).toBe('Gilmar da Silva');
  });

  test('Should throw invalid CPF error', () => {
    expect(() => {
      new Consumer(
        'Luan',
        'de Souza',
        '12345678911',
        '12.123.123-X',
        '84998059100',
        'test@tes.com'
      );
    }).toThrowError('CPF possui um formato inválido');
  });

  test('Should throw invalid RG error', () => {
    expect(() => {
      new Consumer(
        'Gilmar',
        'da Silva',
        '123.123.123-12',
        '111.222.333-X',
        '84994465651',
        'test@test.com'
      );
    }).toThrowError('RG possui um formato inválido');
  });

  test('Should throw invalid Telephone number Error', () => {
    expect(() => {
      new Consumer(
        'Thiago',
        'Silva',
        '123.123.123-45',
        '11.222.333-x',
        '5584981055092',
        'teste@test.com'
      );
    }).toThrowError('Número de telefone está em um formato errado');
  });

  test('Should throw invalid Email error', () => {
    expect(() => {
      new Consumer(
        'Luan',
        'de Souza',
        '123.123.123-45',
        '12.123.123-X',
        '84998059100',
        'test.com'
      );
    }).toThrowError('Email possui um formato inválido');
  });
});
