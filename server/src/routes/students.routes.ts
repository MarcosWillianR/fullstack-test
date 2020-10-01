import { Router } from 'express';

import CreateStudentService from '../services/CreateStudentService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const studentsRouter = Router();

studentsRouter.use(ensureAuthenticated);

studentsRouter.post('/', async (request, response) => {
  const { name, email, ra, cpf } = request.body;

  const createStudent = new CreateStudentService();

  const student = await createStudent.execute({ name, email, ra, cpf });

  return response.json(student);
});

export default studentsRouter;
