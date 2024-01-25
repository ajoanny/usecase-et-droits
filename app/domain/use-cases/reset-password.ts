import AccountsPort from "../ports/accounts-port";
import Account from "../models/account";

export default class ResetPassword {
    private accounts: AccountsPort;

    constructor(accounts: AccountsPort) {
        this.accounts = accounts;
    }

    async execute(email: string, password: string) : Promise<void> {
        const account : Account = await this.accounts.get(email);
        account.resetPassword(password);
        this.accounts.save(account);
    }
}