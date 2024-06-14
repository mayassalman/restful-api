import { Router } from 'express';
import { defaultRoute } from './defaultRoute';
import { userRouter } from './users';
import { emailsRouter } from './emails';

export const routes = Router();

routes.use(defaultRoute,userRouter,emailsRouter);