import express from 'express';
import { activateUserController, registerUserController } from '../services/dependencies';

export const userManagementRouter = express.Router();

userManagementRouter.post('/', registerUserController.execute.bind(registerUserController));
userManagementRouter.put('/:token/activate', activateUserController.execute.bind(activateUserController));
