import type { Knex } from "knex";
import * as path from "path";


// Update with your config settings.

const config: Knex.Config = {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "../../dev.sqlite3")
    },
    seeds: {
      directory: 'seeds'
    },
};

export default config;