import knex from 'knex';
export const pg = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    },
});

export default pg;
