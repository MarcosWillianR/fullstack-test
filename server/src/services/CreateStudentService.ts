import { getCustomRepository } from 'typeorm';

import Student from '../models/Student';
import StudentsRepository from '../repositories/StudentsRepository';

interface RequestDTO {
  ra: string;
  name: string;
  email: string;
  cpf: string;
}

class CreateStudentService {
  public async execute({ name, email, ra, cpf }: RequestDTO): Promise<Student> {
    const studentsRepository = getCustomRepository(StudentsRepository);

    const findStudentWithSameEmail = await studentsRepository.findByEmail(
      email,
    );

    if (findStudentWithSameEmail) {
      throw new Error('This e-mail already exists.');
    }

    const student = studentsRepository.create({ ra, name, email, cpf });

    await studentsRepository.save(student);

    return student;
  }
}

export default CreateStudentService;
