import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('students')
class Student {
  @PrimaryColumn('varchar')
  ra: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;
}

export default Student;
