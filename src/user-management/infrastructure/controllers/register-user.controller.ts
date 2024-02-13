import { Request, Response } from "express";
import { RegisterUserUseCase } from "../../application/use-cases/register-user.use-case";

export class RegisterUserController {

    constructor(readonly useCase: RegisterUserUseCase) {}

    async execute(req: Request,res: Response) {
        try{

            let user = await this.useCase.execute(req.body);

            return res.status(201).json(user);

        }catch(error:any) {
            return res.status(error.http_status ?? 500)
                .json({
                    message:"Error to register user.",
                    error:error
                });
        }
    }

}
