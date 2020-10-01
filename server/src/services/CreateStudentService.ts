import Student from '../models/Student';
import StudentsRepository from '../repositories/StudentsRepository';

interface RequestDTO {
  ra: string;
  name: string;
  email: string;
  cpf: string;
}

class CreateStudentService {
  private studentsRepository: StudentsRepository;

  constructor(studentsRepository: StudentsRepository) {
    this.studentsRepository = studentsRepository;
  }

  public execute({ name, email, ra, cpf }: RequestDTO): Student {
    const findStudentWithSameEmail = this.studentsRepository.findByEmail(email);

    if (findStudentWithSameEmail) {
      throw Error('This e-mail already exists.');
    }

    const student = this.studentsRepository.create({ ra, name, email, cpf });

    return student;
  }
}

export default CreateStudentService;
