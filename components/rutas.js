var express = require('express');
var pdfMaker = require('./pdfMaker/pdfMaker.network')

const rutas = [
    pdfMaker
];

module.exports = rutas; 