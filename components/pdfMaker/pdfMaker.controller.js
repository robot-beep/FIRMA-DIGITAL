const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();
var path = '../FIRMA-DIGITAL/public/'
var pdf = '.pdf'
var name = 'hola'

async function hola() {
    console.log("hola mundo");
};

async function createDoc(nombre) {
    // create a document and pipe to a blob
    console.log("hola mundo 2")

    var doc = new PDFDocument({
        size: 'A4',
        margin: 0
    });

    doc.pipe(fs.createWriteStream("../FIRMA-DIGITAL/public/" + nombre + pdf));


    // add stuff to PDF here using methods described in the documentation 
    // Fit the image within the dimensions
    doc.image('C:/Users/pplm97/Documents/firma-digital/public/1.png', 0, 0, { fit: [595, 840], align: 'center' })
        .stroke()
        .fillColor('#FFFFFF')
        .text("Edén Jofré Romeo", 0, 420, {align: 'center'})
        

    // finalize the PDF and end the stream
    doc.end();
};


module.exports.hola = hola;
module.exports.createDoc = createDoc;