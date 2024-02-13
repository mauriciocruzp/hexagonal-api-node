import { RegisterUserUseCase } from "../../application/use-cases/RegisterUserUseCase";
import { MysqlUserRepository } from "../repositories/MysqlUserRepository";
import { RegisterUserController } from "../controllers/RegisterUserController";

const mysqlUserRepository = new MysqlUserRepository();
const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository);

export const registerUserController = new RegisterUserController(registerUserUseCase);
