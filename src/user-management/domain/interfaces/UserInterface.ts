import { User } from "../entities/User";

export interface UserInterface {
    registerUser(user: User): Promise<User|null|undefined>;
    searchUserByToken(token: string): Promise<User|null>;
    updateVerifiedAt(user:User): Promise<User|null>;
}
