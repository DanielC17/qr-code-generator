

class QrCode {
    constructor(qrCodeRepository) {
        this.qrCodeRepository = qrCodeRepository;
    }

    async getAllQrCodes() {
        console.log('Buscando todos os Qrcodes gerados')
        try{
            const qrCodes = await this.qrCodeRepository.getAllQrCodes();
            if (!qrCodes || qrCodes.length === 0) {
                console.log('Nenhum Qrcode encontrado');
                return [];
            }
            console.log(`Foram encontrados ${qrCodes.length} Qrcodes`);
            return qrCodes;
        }catch (e) {
            console.log(`Erro ao buscar Qrcodes: ${e}`);
            return [];
        }
    }
}
module.exports = QrCode;