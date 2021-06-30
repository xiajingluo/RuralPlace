import { InvalidEmailError } from './errors/invalid-email-error';

export class Email {
  private readonly email: string;

  private constructor(email: string) {
    this.email = email;

    Object.freeze(this);
  }

  static create(email: string): Email {
    if (!Email.validate(email)) {
      throw new InvalidEmailError();
    }
    return new Email(email);
  }

  static validate(email: string): boolean {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!email) {
      return false;
    }

    if (email.length > 255) {
      return false;
    }

    if (!emailRegex.test(email)) {
      return false;
    }

    return true;
  }
}
