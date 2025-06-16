const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users route is working');
});

router.get('/:userId', (req, res) => {

});

router.post('/register', (req, res) => {

});

router.put('/update/:userId', (req, res) => {

});

router.delete('/delete/:userId', (req, res) => {

});

module.exports = router;