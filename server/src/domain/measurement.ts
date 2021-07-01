import { MeasurementEnum } from './enum/measurement-enum';
import { InvalidMeasurementError } from './errors/invalid-measurement-error';

export class Measurement {
  private readonly measurement: string;

  constructor(measurement: string) {
    this.measurement = measurement;

    Object.freeze(this);
  }

  static create(measurement: string): Measurement {
    if (!Measurement.validate(measurement)) {
      throw new InvalidMeasurementError();
    }
    const measurementUppercase = measurement.toUpperCase();

    return new Measurement(measurementUppercase);
  }

  public get value(): string {
    return this.measurement;
  }

  static validate(measurement: string): boolean {
    if (!measurement) {
      return false;
    }

    const measurementUppercase = measurement.toUpperCase();

    if (measurementUppercase === MeasurementEnum.KG.valueOf()) {
      return true;
    } else if (measurementUppercase === MeasurementEnum.ML.valueOf()) {
      return true;
    } else if (measurementUppercase === MeasurementEnum.UNI.valueOf()) {
      return true;
    } else {
      return false;
    }
  }
}
