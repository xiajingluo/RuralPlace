export class TelephoneNumber {
  private readonly tel: string;

  private constructor(tel: string) {
    this.tel = tel;

    Object.freeze(this);
  }

  static create(tel: string) {}

  static validate(tel: string) {}
}
