import { RegisterUserUseCase } from "../../application/use-cases/register-user.use-case";
import { MysqlUserRepository } from "../repositories/mysql-user.repository";
import { RegisterUserController } from "../controllers/register-user.controller";
import { HandleBcrypt } from "../../application/helpers/handle-bcrypt";
import { ActivateUserUseCase } from "@src/user-management/application/use-cases/activate-user.use-case";
import { ActivateUserController } from "../controllers/activate-user.controller";


const mysqlUserRepository = new MysqlUserRepository();
const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository);
const activateUserUserCase = new ActivateUserUseCase(mysqlUserRepository);

export const handleBCrypt = new HandleBcrypt();
export const registerUserController = new RegisterUserController(registerUserUseCase);
export const activateUserController = new ActivateUserController(activateUserUserCase)
