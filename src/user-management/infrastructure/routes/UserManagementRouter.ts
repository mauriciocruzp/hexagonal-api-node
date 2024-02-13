import express from 'express';
import { registerUserController } from '../Services/Dependencies';

export const userManagementRouter = express.Router();

userManagementRouter.post('/', registerUserController.execute.bind(registerUserController))
