import { UserInterface } from "../../domain/interfaces/UserInterface";
import { Activation } from "../../domain/entities/Activation";
import { Contact } from "../../domain/entities/Contact";
import { Credentials } from "../../domain/entities/Credentials";
import { User } from "../../domain/entities/User";

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
