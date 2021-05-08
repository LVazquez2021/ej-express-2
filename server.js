const express = require('express');
const app = express();
const path = require('path');
const port = 3500;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
})



app.listen(port, function() {
    console.log(`el servidor esta corriendo en el puerto ${port}`);
})