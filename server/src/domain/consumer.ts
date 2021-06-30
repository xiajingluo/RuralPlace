import { CPF } from './cpf';
import { Email } from './email';
import { RG } from './rg';
import { TelephoneNumber } from './telephoneNumber';

export class Consumer {
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly cpf: CPF;
  private readonly rg: RG;
  private readonly telephone: TelephoneNumber;
  private readonly email: Email;

  constructor(
    firstName: string,
    lastName: string,
    cpf: string,
    rg: string,
    telephone: string,
    email: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = CPF.create(cpf);
    this.rg = RG.create(rg);
    this.telephone = TelephoneNumber.create(telephone);
    this.email = Email.create(email);
  }
}
