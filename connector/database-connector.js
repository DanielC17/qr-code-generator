const {Pool} = require('pg');

class DatabaseConnector {

    async configureConnection() {
        console.log('Configuring database connection...');
        console.log(`DB_USER: ${process.env.DB_USER}, DB_HOST: ${process.env.DB_HOST}, DB_NAME: ${process.env.DB_NAME}, DB_PORT: ${process.env.DB_PORT}`);
        if(!global.databaseConnection) {
            global.databaseConnection = new Pool({
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PASSWORD,
                max: process.env.DB_CONNECTION_LIMIT,
                port: process.env.DB_PORT,
            });
        }
        return global.databaseConnection;
    }

    async generateConnection() {
        return Promise.resolve(this.configureConnection());
    }
}


module.exports = DatabaseConnector;
