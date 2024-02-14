import { RegisterUserUseCase } from "../../application/use-cases/register-user.use-case";
import { MysqlUserRepository } from "../repositories/mysql-user.repository";
import { RegisterUserController } from "../controllers/register-user.controller";
import { HandleBcrypt } from "../../application/helpers/handle-bcrypt";

const mysqlUserRepository = new MysqlUserRepository();
const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository);
export const handleBCrypt = new HandleBcrypt();
export const registerUserController = new RegisterUserController(registerUserUseCase);
