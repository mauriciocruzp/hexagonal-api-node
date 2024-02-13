import { RegisterUserUseCase } from "../../application/use-cases/register-user.use-case";
import { MysqlUserRepository } from "../repositories/mysql-user.repository";
import { RegisterUserController } from "../controllers/register-user.controller";

const mysqlUserRepository = new MysqlUserRepository();
const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository);

export const registerUserController = new RegisterUserController(registerUserUseCase);
