import { Contact } from "./contact";
import { Credentials } from "./credentials";
import { Activation } from "./activation";

export class User {
    public uuid: string;
    public contact: Contact;
    public credentials: Credentials;
    public activation: Activation;

    constructor(
        contact: Contact,
        credentials: Credentials,
        activation: Activation
    ) {
        this.uuid = this.generateUuidField();
        this.contact = contact;
        this.credentials = credentials;
        this.activation = activation;
    }

    generateUuidField(): string {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    active(): Boolean {
        return this.activation.isUserActive();
    }
}
