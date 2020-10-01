class Student {
  ra: string;

  name: string;

  email: string;

  cpf: string;

  constructor({ ra, name, email, cpf }: Student) {
    this.ra = ra;
    this.name = name;
    this.email = email;
    this.cpf = cpf;
  }
}

export default Student;
