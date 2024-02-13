export class Contact {
    public firstName: string;
    public lastName: string;
    public cellPhone: string;
    private fullName: string;

    constructor(firstName: string, lastName: string, cellPhone: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cellPhone = cellPhone;
        this.fullName = this.firstName + " " + this.lastName;
    }

    getFullName(): string {
        return this.fullName;
    }
}
