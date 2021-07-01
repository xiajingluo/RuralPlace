import { CPF } from './cpf';
import { Email } from './email';
import { RG } from './rg';
import { TelephoneNumber } from './telephoneNumber';

export class Consumer {
  private readonly _firstName: string;
  private readonly _lastName: string;
  private readonly _cpf: CPF;
  private readonly _rg: RG;
  private readonly _telephone: TelephoneNumber;
  private readonly _email: Email;

  constructor(
    firstName: string,
    lastName: string,
    cpf: string,
    rg: string,
    telephone: string,
    email: string
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._cpf = CPF.create(cpf);
    this._rg = RG.create(rg);
    this._telephone = TelephoneNumber.create(telephone);
    this._email = Email.create(email);
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}
