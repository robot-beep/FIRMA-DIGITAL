const express = require('express')
const app = express()
const rutas = require('./components/rutas')

app.use('/', rutas)

app.listen(3000, function (req, res) {
    console.log("escuchando al puerto 3000");
});
