import { InvalidTelephoneError } from './errors/invalid-telephone-number-error';

export class TelephoneNumber {
  private readonly tel: string;

  private constructor(tel: string) {
    this.tel = tel;

    Object.freeze(this);
  }

  static create(tel: string): TelephoneNumber {
    if (!TelephoneNumber.validate(tel)) {
      throw new InvalidTelephoneError();
    }
    return new TelephoneNumber(tel);
  }

  static validate(tel: string): boolean {
    const telephoneNumberRegex = /(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/;

    if (!tel) {
      return false;
    }

    if (tel.length > 12 || tel.length < 10) {
      return false;
    }

    if (!telephoneNumberRegex.test(tel)) {
      return false;
    }

    return true;
  }
}
