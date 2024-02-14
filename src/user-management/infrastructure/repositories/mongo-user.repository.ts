import { UserInterface } from "../../domain/interfaces/user.interface";
import { User } from "../../domain/entities/user";

export class UserMongoRepository implements UserInterface {
    registerUser(user: User): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    searchUserByToken(token: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    updateVerifiedAt(user: User): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
}
