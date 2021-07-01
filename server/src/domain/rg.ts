import { InvalidRGError } from './errors/invalid-rg-error';

export class RG {
  private readonly rg: string;

  private constructor(rg: string) {
    this.rg = rg;

    Object.freeze(this);
  }

  static create(rg: string): RG {
    if (!RG.validate(rg)) {
      throw new InvalidRGError();
    }
    return new RG(rg);
  }

  static validate(rg: string): boolean {
    const rgRegex =
      /(^\d{1,2})[.](\d{3})[.](\d{3})[-](\d{1}|X|x$)|(^\d{3})[.](\d{3})[.](\d{3})/;

    if (!rg) {
      return false;
    }

    if (rg.length < 11 || rg.length > 12) {
      return false;
    }

    if (!rgRegex.test(rg)) {
      return false;
    }

    return true;
  }
}
