import { User } from "../../domain/entities/user";

export interface EmailInterface {
    run(user: User):void;
    buildEmail(user: User):string;
}
