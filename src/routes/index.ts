import { Router } from 'express';
import { defaultRoute } from './defaultRoute';
import { userRouter } from './users';

export const routes = Router();

routes.use(defaultRoute,userRouter);