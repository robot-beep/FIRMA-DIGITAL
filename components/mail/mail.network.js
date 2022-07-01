const express = require('express');
const router = express.Router();
const controller = require('./mail.controller');

router.get('/mail', (req, res)=>{
    controller.correo();
})

module.exports = router; 