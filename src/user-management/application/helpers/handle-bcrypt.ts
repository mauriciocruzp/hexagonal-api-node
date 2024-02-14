import bcrypt from 'bcrypt';

export class HandleBcrypt {
    private workFactor = 8;

    async encryptPassword(password: string): Promise<string> {
        const hash = await bcrypt.hash(password, this.workFactor);
        return hash;
    }

    async comparePassword(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}
