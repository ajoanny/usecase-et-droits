import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import Context from "../../../context";

interface ResetPasswordPayload {
    password: string;
}

export default class AdminAccountController extends Context {
    async resetPassword(request: Request, h: ResponseToolkit): Promise<ResponseObject> {

        const payload: ResetPasswordPayload =  <ResetPasswordPayload>request.payload;

        await this.resetPasswordUseCase.execute(request.params.email, payload.password);

        return h.response().code(200)
    }
}

