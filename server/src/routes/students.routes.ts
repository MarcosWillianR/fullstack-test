import { Router } from 'express';

import CreateStudentService from '../services/CreateStudentService';

const studentsRouter = Router();

studentsRouter.post('/', async (request, response) => {
  try {
    const { name, email, ra, cpf } = request.body;

    const createStudent = new CreateStudentService();

    const student = await createStudent.execute({ name, email, ra, cpf });

    return response.json(student);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default studentsRouter;
