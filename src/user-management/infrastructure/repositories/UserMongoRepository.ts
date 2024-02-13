import { UserInterface } from "../../domain/Interfaces/UserInterface";
import { Contact } from "../../domain/entities/Contact";
import { UserCredentials } from "../../domain/entities/Credentials";
import { User } from "../../domain/entities/User";

export class UserMongoRepository implements UserInterface {
    registerUser(contact: Contact, credentials: UserCredentials, activation: UserActivation): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    searchUserByToken(token: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    updateVerifiedAt(user: User): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
}
