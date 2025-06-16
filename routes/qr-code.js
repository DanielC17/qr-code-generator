const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('QrCode route is working');
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