import { EntityRepository, Repository } from 'typeorm';

import Student from '../models/Student';

@EntityRepository(Student)
class StudentsRepository extends Repository<Student> {
  public async findByEmail(email: string): Promise<Student | null> {
    const findStudent = await this.findOne({
      where: { email },
    });

    return findStudent || null;
  }
}

export default StudentsRepository;
