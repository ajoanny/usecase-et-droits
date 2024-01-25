import { ServerRoute } from "@hapi/hapi";
import AdminAccountController from './controller';
import AccessManager from "../access-manager";

const adminAccountController: AdminAccountController = new AdminAccountController();

const adminAccountRoutes: ServerRoute[] = [
    {
        method: "POST",
        path: "/admin/accounts/{email}",
        options: {
            pre: [{ method: AccessManager.isAdmin }]
        },
        handler: adminAccountController.resetPassword
    },
];

export default adminAccountRoutes;