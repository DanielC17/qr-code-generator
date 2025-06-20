
const databaseConnector = require('../../../connector/database-connector');

class QrCodeRepository {
    constructor() {
        this.databaseConnector = new databaseConnector();
    }

    async getAllQrCodes() {
        const connection = await this.databaseConnector.generateConnection();
        const result = await connection.query('SELECT * FROM qr_codes');
        return result.rows;
    }

    async getQrCodeById(id) {
        const connection = await this.databaseConnector.generateConnection();
        const result = await connection.query('SELECT * FROM qr_codes WHERE id = $1', [id]);
        return result.rows[0];
    }

    async createQrCode(data) {
        const connection = await this.databaseConnector.generateConnection();
        const result = await connection.query('INSERT INTO qr_codes (data) VALUES ($1) RETURNING *', [data]);
        return result.rows[0];
    }

    async updateQrCode(id, data) {
        const connection = await this.databaseConnector.generateConnection();
        const result = await connection.query('UPDATE qr_codes SET data = $1 WHERE id = $2 RETURNING *', [data, id]);
        return result.rows[0];
    }

    async deleteQrCode(id) {
        const connection = await this.databaseConnector.generateConnection();
        await connection.query('DELETE FROM qr_codes WHERE id = $1', [id]);
    }
}

module.exports = QrCodeRepository;