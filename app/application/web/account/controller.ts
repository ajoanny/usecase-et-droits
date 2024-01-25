import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import Context from "../../context";

interface ResetPasswordPayload {
    password: string;
    resetPasswordToken: string;
}

export default class AccountController extends Context {

    async resetPassword(
        request: Request,
        h: ResponseToolkit
    ): Promise<ResponseObject> {

        const payload: ResetPasswordPayload = <ResetPasswordPayload>request.payload;
        const email: string = request.params.email;
        const password: string = payload.password;
        const token: string = payload.resetPasswordToken;

        await this.resetPasswordTokenService.checkToken(email, token);
        await this.resetPasswordUseCase.execute(email, password);
        await this.resetPasswordTokenService.removeToken(email);

        return h.response().code(200);
    }
}
