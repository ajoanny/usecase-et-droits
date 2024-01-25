import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";

export let server: Server;
import accountRoutes from "./account/route";
import adminAccountRoutes from "./admin/account/route";
import Context from "../context";

export const init = async function(): Promise<Server> {
    server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });

    server.bind(new Context())
    server.route(accountRoutes);
    server.route(adminAccountRoutes);

    server.ext('onPreResponse', (request, h, err) => {
        if(request.response instanceof Error){
            return h.response(request.response.message).code(500)
        }
        return h.continue;
    });
    return server;
};

export const start = async function (): Promise<void> {
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    return server.start();
};

process.on('unhandledRejection', (err: any) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});
