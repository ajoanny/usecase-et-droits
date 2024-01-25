import PasswordTooSmall from "../errors/password-too-small";

export default class Account {
    private _email: string;
    private _password: string;

    constructor(email : string, password: string) {
        this._email = email;
        this._password = password;
    }

    resetPassword(password: string): void{
        if(password.length < 8) {
            throw new PasswordTooSmall();
        }
        this._password = password;
    }

    get password(): string {
        return this._password;
    }

    get email(): string {
        return this._email;
    }
}