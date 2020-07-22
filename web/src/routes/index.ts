import { Router } from 'express';
import '../database';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments',appointmentsRouter);


export default routes;

// import { Router } from 'express'
// import '../database';
// const routes = Router();

// routes.get('/', (request, response) => { response.json({ message: 'Ola Mundo' }) });

// const routes = Router();
