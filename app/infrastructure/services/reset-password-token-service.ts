import knex from "../../db/knex";

class InvalidResetPasswordToken extends Error {
}

export default class ResetPasswordTokenService {
    async checkToken(email: string, resetPasswordToken: string): Promise<void> {
        const account = await knex('accounts').where({ email, reset_password_token: resetPasswordToken }).first();
        if(!account){
            throw new InvalidResetPasswordToken('Token Invalid');
        }
    }

    async removeToken(email: string): Promise<void> {
        await knex('accounts').update({ reset_password_token: null }).where({ email });
    }
}