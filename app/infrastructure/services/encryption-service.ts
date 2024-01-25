import bcrypt from 'bcrypt';
export default class EncryptionService {
    static readonly SALT: number = 10;

    encrypt(password: string): Promise<string> {
        return bcrypt.hash(password, EncryptionService.SALT);
    }
}