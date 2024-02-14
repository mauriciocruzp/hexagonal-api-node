import { Request, Response } from "express";
import { ActivateUserUseCase } from "../../application/use-cases/activate-user.use-case";

export class ActivateUserController {

    constructor(readonly useCase: ActivateUserUseCase) {}

    async execute(req: Request, res: Response) {
        try {
            const user = await this.useCase.execute({ token: req.params.token });

            return res.status(201).json(user);
        } catch (error: any) {
            return res.status(error.http_status ?? 500)
                .json({
                    message: "Error to activate user.",
                    error: error
                });
        }
    }
}
