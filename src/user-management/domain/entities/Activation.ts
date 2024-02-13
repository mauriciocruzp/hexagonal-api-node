export class Activation {
    public userActivationToken: string;
    public verifiedAt: Date;

    constructor(userActivationToken: string, verifiedAt: Date) {
        this.userActivationToken = userActivationToken;
        this.verifiedAt = verifiedAt;
    }

    isUserActive(): Boolean {
        return this.verifiedAt !== null;
    }
}
