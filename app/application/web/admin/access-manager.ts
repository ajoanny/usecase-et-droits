import Hapi, { Request, ResponseToolkit} from "@hapi/hapi";
import AuthenticationService from '../../../infrastructure/services/authentication-service';
export default class AccessManager {
    static isAdmin: Hapi.Lifecycle.Method =  async (request: Request, h: ResponseToolkit) => {
        const current_user : string = 'fake@example.net';
        if(!AuthenticationService.isAdmin(current_user)){
            return h.response('Unauthorized').code(401).takeover();
        }
        return true;
    }
}