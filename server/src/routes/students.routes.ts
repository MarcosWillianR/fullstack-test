import { Router } from 'express';

import StudentsRepository from '../repositories/StudentsRepository';
import CreateStudentService from '../services/CreateStudentService';

const studentsRouter = Router();
const studentsRepository = new StudentsRepository();

studentsRouter.post('/', (request, response) => {
  try {
    const { name, email, ra, cpf } = request.body;

    const createStudent = new CreateStudentService(studentsRepository);

    const student = createStudent.execute({ name, email, ra, cpf });

    return response.json(student);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default studentsRouter;
