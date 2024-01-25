
import EncryptionService from "../services/encryption-service";
import Account from "../../domain/models/account";
import AccountsPort from "../../domain/ports/accounts-port";
import knex from "../../db/knex";
import NotFound from "../../domain/errors/not-found";

interface AccountDTO {
    id: number;
    email: string;
    password: string;
}
export default class AccountRepository implements AccountsPort {
    private encryptionService: EncryptionService;

    constructor(encryptionService : EncryptionService) {
        this.encryptionService = encryptionService;
    }

    async get(email: string): Promise<Account> {
        const accountDTO: AccountDTO| void  = await knex<AccountDTO>('accounts').where({ email }).first();

        if(accountDTO) {
            return toAccount(accountDTO);
        }
        throw new NotFound(`Account "${email} not found"`);
    };
    async save(account: Account): Promise<void> {
        const passwordEncrypted: string = await this.encryptionService.encrypt(account.password);
        await knex('accounts').update({ password: passwordEncrypted }).where({ email: account.email });
    }
}

function toAccount(accountDto: AccountDTO): Account {
    return new Account(accountDto.email, accountDto.password);
}