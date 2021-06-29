export class Consumer {
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly cpf: string;
  private readonly rg: string;
  private readonly telephone: string;
  private readonly email: string;

  private constructor(firstName: string, lastName: string, cpf: string, rg: string, telephone: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.rg = rg;
    this.telephone = telephone;
    this.email = email;
  }
}
