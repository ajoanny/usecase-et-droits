import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('accounts', function (table) {
            table.increments('id');
            table.string('email', 255).notNullable();
            table.string('password', 255).notNullable();
            table.string('reset_password_token', 255);
        });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("accounts");
}

