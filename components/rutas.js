var express = require('express');
var pdfMaker = require('./pdfMaker/pdfMaker.network')
var mail = require('./mail/mail.network')

const rutas = [
    pdfMaker,
    mail
];

module.exports = rutas; 
