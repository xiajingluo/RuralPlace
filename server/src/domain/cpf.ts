// import { Either, left } from '../@types/either';
import { InvalidCPFError } from './errors/invalid-cpf-error';

export class CPF {
  private readonly cpf: string;

  private constructor(cpf: string) {
    this.cpf = cpf;

    Object.freeze(this);
  }

  static create(cpf: string): CPF {
    if (!CPF.validate(cpf)) {
      throw new InvalidCPFError();
    }
    return new CPF(cpf);
  }

  static validate(cpf: string): boolean {
    const cpfRegex = /^([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2})/;

    if (!cpf) {
      return false;
    }

    if (cpf.length < 14) {
      return false;
    }

    if (!cpfRegex.test(cpf)) {
      return false;
    }

    return true;
  }
}
