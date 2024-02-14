import { UserInterface } from "@src/user-management/domain/interfaces/user.interface";
import { User } from "../../domain/entities/user";

export class ActivateUserUseCase {
    constructor(readonly repository: UserInterface) {}

    async execute({token}: {token: string}): Promise<User | any> {
        try {
            const user = await this.repository.searchUserByToken(token);
        } catch (error: any) {

        }
    }
}
