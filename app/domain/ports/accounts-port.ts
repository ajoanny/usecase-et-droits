import Account from "../models/account";

export default interface AccountsPort {
    get(email: string): Promise<Account>;
    save(account: Account): Promise<void>;
}