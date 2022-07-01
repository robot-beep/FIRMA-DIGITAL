const express = require('express');
const router = express.Router();
const controller = require("./pdfMaker.controller");

router.get('/prueba', (req, res)=>{
    res.send("está es mi primera ruta");
    controller.createDoc("prueba");
}); 

router.get('/parse', async (req, res)=>{
    console.log(await controller.parse());
})

module.exports = router; 