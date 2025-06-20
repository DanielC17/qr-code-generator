const express = require('express');
const router = express.Router();


const QrCodeComponent = require('../components/qrCode/qrCode');
const QrCodeRepository = require('../components/qrCode/data/qrCode-repository');

const qrCode = new QrCodeComponent(new QrCodeRepository());


router.get('/', (req, res) => {
    console.log('busncando todos os Qrcodes gerados');
    const response = qrCode.getAllQrCodes();
    res.send(response, 200);
});

router.get('/:Id', (req, res) => {
});

router.post('/register', (req, res) => {
});

router.put('/update/:Id', (req, res) => {
});

router.delete('/delete/:Id', (req, res) => {

});

module.exports = router;