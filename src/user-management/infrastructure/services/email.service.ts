import { User } from "../../domain/entities/user";
import { EmailInterface } from "./email.interface";

export class EmailService implements EmailInterface{
    buildEmail(user: User): string {
        throw new Error("Method not implemented.");
    }
    run(user: User): void {
        throw new Error("Method not implemented.");
    }
}
