import { executeQuery } from "../../../database/mysql";
import { UserInterface } from "../../domain/interfaces/user.interface";
import { User } from "../../domain/entities/user";
import { handleBCrypt } from "../services/dependencies";
import { Contact } from "@src/user-management/domain/entities/contact";

export class MysqlUserRepository implements UserInterface {
    async registerUser(user: User): Promise<User | null | undefined> {
        try {
            const query = 'INSERT INTO users(id, first_name, last_name, email, password, cellphone) VALUES(?, ?, ?, ?, ?, ?)';
            const encryptedPassword = await handleBCrypt.encryptPassword(user.credentials.password);
            const params = [user.uuid, user.contact.firstName, user.contact.lastName, user.credentials.email, encryptedPassword, user.contact.cellPhone];
            const result = await executeQuery(query, params);

            if (result !== null) {
                return new User(user.contact, user.credentials, user.activation)
            } else {
                return null;
            }

        } catch (error) {
            console.log("Error: ", error);
        }
    }
    async searchUserByToken(token: string): Promise<User | null | undefined> {
        try {
            const query = 'SELECT * FROM users WHERE activation_token = ?';
            const params = [token];
            const result = await executeQuery(query, params);

            console.log(result);

            return null;
        } catch (error: any) {
            console.log("Error: ", error);
        }
    }
    updateVerifiedAt(user: User): Promise<User | null> {
        throw new Error("Method not implemented.");
    }

}
