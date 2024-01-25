import { ServerRoute } from "@hapi/hapi";
import AccountController from "./controller";

const accountRoutes: ServerRoute[] = [
    {
        method: "POST",
        path: "/accounts/{email}",
        handler: new AccountController().resetPassword
    },
];

export default accountRoutes;