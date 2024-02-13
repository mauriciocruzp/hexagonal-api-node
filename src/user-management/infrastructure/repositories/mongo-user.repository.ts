import { UserInterface } from "../../domain/interfaces/user.interface";
import { Contact } from "../../domain/entities/contact";
import { Credentials } from "../../domain/entities/credentials";
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
