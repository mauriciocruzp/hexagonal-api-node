import { User } from "../../domain/entities/User";

export interface EmailInterface {
    run(user: User):void;
    buildEmail(user: User):string;
}
