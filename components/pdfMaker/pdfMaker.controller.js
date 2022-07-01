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
    let array;
    let datos;

    fs.readFile("C:/Users/pplm97/Desktop/fablab/FIRMA-DIGITAL/public/asistencia.csv", "latin1", (err, data) => {
        if (err) throw err;
        datos = data.toString()
        array = datos.split('\n');

        console.log(array);

        array.forEach(element => {
            nombre = element.slice(0,-1);
            console.log(nombre)
            var doc = new PDFDocument({
                size: 'LEGAL',
                margin: 0
            });
    
            doc.pipe(fs.createWriteStream("../FIRMA-DIGITAL/public/" + nombre + pdf));
    
    
            // add stuff to PDF here using methods described in the documentation 
            // Fit the image within the dimensions
            doc.image('C:/Users/pplm97/Desktop/fablab/FIRMA-DIGITAL/public/1.png', 0, 0, { width: 612 })
                .stroke()
                .fillColor('#FFFFFF')
                .fontSize(25)
                .text(nombre, 0, 550, { align: 'center' })
    
    
            // finalize the PDF and end the stream
            doc.end();
        });
    })

};


module.exports.hola = hola;
module.exports.createDoc = createDoc;
