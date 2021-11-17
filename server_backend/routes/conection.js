const mysql = require('mysql');
//Creamos la conección a la DB
const conection = mysql.createConnection({
    host: "localhost",
    database:"proideau_db",
    user: "user_proideaudb",
    password: "proideau"
});

//Confirmamos que la conección sea efectiva - sólo para prueba de conección
conection.connect(function(err) {  
    if (err) throw err;  
    console.log("Conexión confirmada");  
  }); 
 module.exports = conection;