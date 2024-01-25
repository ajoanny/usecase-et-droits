import { Knex } from "knex";
import EncryptionService from "../../infrastructure/services/encryption-service"
import bcrypt from "bcrypt";
export async function seed(knex: Knex): Promise<void> {
    const encryptionService: EncryptionService = new EncryptionService();
    // Deletes ALL existing entries
    await knex("accounts").del();

    // Inserts seed entries
    await knex("accounts").insert([
        { id: 1, email: 'user1@example.net',  password: await encryptionService.encrypt('abc123'), reset_password_token: '01234' },
        { id: 2, email: 'user2@example.net',  password: await encryptionService.encrypt('def456'), reset_password_token: '56789' },
    ]);
};
