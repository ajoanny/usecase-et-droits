import AccountsPort from "../domain/ports/accounts-port";
import AccountRepository from "../infrastructure/repositories/account-repository";
import EncryptionService from "../infrastructure/services/encryption-service";
import ResetPassword from "../domain/use-cases/reset-password";
import ResetPasswordTokenService from "../infrastructure/services/reset-password-token-service";

export default class Context {
    accountRepository: AccountsPort;
    encryptionService: EncryptionService;
    resetPasswordUseCase: ResetPassword;
    resetPasswordTokenService: ResetPasswordTokenService;

    constructor() {
        this.encryptionService = new EncryptionService();
        this.accountRepository = new AccountRepository(this.encryptionService);
        this.resetPasswordTokenService = new ResetPasswordTokenService();

        this.resetPasswordUseCase = new ResetPassword(this.accountRepository)
    }
}