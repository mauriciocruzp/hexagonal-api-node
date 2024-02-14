import { executeQuery } from "../../../database/mysql";
import { UserInterface } from "../../domain/interfaces/user.interface";
import { User } from "../../domain/entities/user";
import { handleBCrypt } from "../services/dependencies";

export class MysqlUserRepository implements UserInterface {
    async registerUser(user: User): Promise<User | null | undefined> {
        try {
            let query = 'INSERT INTO users(id, first_name, last_name, email, password, cellphone) VALUES(?, ?, ?, ?, ?, ?)';
            const encryptedPassword = await handleBCrypt.encryptPassword(user.credentials.password);
            const params = [user.uuid, user.contact.firstName, user.contact.lastName, user.credentials.email, encryptedPassword, user.contact.cellPhone];
            const result = await executeQuery(query, params);

            console.log(result);
            if (result !== null) {
                return new User(user.contact, user.credentials, user.activation)
            } else {
                return null;
            }

        } catch (error) {
            console.log("Error: ", error);
        }
    }
    searchUserByToken(token: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    updateVerifiedAt(user: User): Promise<User | null> {
        throw new Error("Method not implemented.");
    }

}
