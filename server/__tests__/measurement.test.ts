import { Measurement } from '../src/domain/measurement';

describe('Measurement validation', () => {
  test('Should accept a valid measurement', () => {
    expect(Measurement.validate('kg')).toBe(true);
    expect(Measurement.validate('KG')).toBe(true);

    expect(Measurement.validate('uni')).toBe(true);
    expect(Measurement.validate('Uni')).toBe(true);
    expect(Measurement.validate('UNI')).toBe(true);

    expect(Measurement.validate('mL')).toBe(true);
    expect(Measurement.validate('ML')).toBe(true);
    expect(Measurement.validate('ml')).toBe(true);
  });

  test('Should be return a value of Measurement in string', () => {
    const kg = Measurement.create('kg');
    const uni = Measurement.create('Uni');
    const mL = Measurement.create('mL');

    expect(kg.value).toBe('KG');
    expect(uni.value).toBe('UNI');
    expect(mL.value).toBe('ML');

    expect(typeof kg.value).toBe('string');
    expect(typeof uni.value).toBe('string');
    expect(typeof mL.value).toBe('string');
  });

  test('Should not accept invalid measurement', () => {
    expect(Measurement.validate('Kilo')).toBe(false);
    expect(Measurement.validate('kilo')).toBe(false);

    expect(Measurement.validate('Unidade')).toBe(false);
    expect(Measurement.validate('UNIDADE')).toBe(false);

    expect(Measurement.validate('MiliLitro')).toBe(false);
    expect(Measurement.validate('Litro')).toBe(false);
  });

  test('Should creat a valid Measurement instance', () => {
    expect(Measurement.create('KG')).toBeInstanceOf(Measurement);
  });

  test('Should throw a Invalid Measurement error', () => {
    expect(() => {
      Measurement.create('Kilo');
    }).toThrowError('Medida de venda inválida');
  });
});
