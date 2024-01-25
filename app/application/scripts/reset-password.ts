import ResetPassword from "../../domain/use-cases/reset-password";
import AccountRepository from "../../infrastructure/repositories/account-repository";
import EncryptionService from "../../infrastructure/services/encryption-service";

async function main(email: string, password: string) {
    const accountRepository: AccountRepository = new AccountRepository(new EncryptionService());
    const resetPassword: ResetPassword = new ResetPassword(accountRepository)
    await resetPassword.execute(email, password);
}

(async function () {
  if (process.argv[1].match(__filename)) {
      const email: string = process.argv[2];
      const password: string = process.argv[3];
      await main(email, password);
  }
})();