import express from 'express';
import { registerUserController } from '../services/dependencies';

export const userManagementRouter = express.Router();

userManagementRouter.post('/', registerUserController.execute.bind(registerUserController))
