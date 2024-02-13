import { UserInterface } from "../../domain/interfaces/user.interface";
import { Activation } from "../../domain/entities/activation";
import { Contact } from "../../domain/entities/contact";
import { Credentials } from "../../domain/entities/credentials";
import { User } from "../../domain/entities/user";

export class RegisterUserUseCase {
    constructor(readonly repository: UserInterface) {}

    async execute({firstName, lastName, email, password, cellPhone}: {firstName: string, lastName: string, email: string, password: string, cellPhone: string}): Promise<User | any> {
        try {
            let contact = new Contact(firstName,lastName,cellPhone);
            let credentials = new Credentials(email,password);
            let activation = new Activation("",new Date);

            let user = new User(
                contact,
                credentials,
                activation
            );

            return await this.repository.registerUser(user);

        }catch(error) {

        }
    }
}
