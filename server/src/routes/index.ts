import { Router } from 'express';

import studentsRouter from './students.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/users', usersRouter);

export default routes;
