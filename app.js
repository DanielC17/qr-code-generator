const express = require('express');
const app = express();
const port = 3000;


const routesUsers = require('./routes/users');
const routesQrCode = require('./routes/qr-code');

app.listen(port, (error) => {
    if(error){
        console.error(`Error starting server: ${error.message}`);
        return;
    }
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', routesUsers)
app.use('/qr-code', routesQrCode);


module.exports = app;
