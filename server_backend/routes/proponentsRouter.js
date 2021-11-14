const express = require("express");
const mysql = require('mysql');
const router = express.Router();
//Creamos la conección a la DB
const con = mysql.createConnection({
    host: "localhost",
    database:"proideau_db",
    user: "user_proideaudb",
    password: "proideau"
});
//Confirmamos que la conección sea efectiva - sólo para prueba de conección
con.connect(function(err) {  
    if (err) throw err;  
    console.log("Connected!");  
  });  
//Función para crear un usuario proponente en la DB usando HTTP-Pos
router.post("/", (req, res) => {
    //recibe el objeto "req" con los datos del usuario almacenados en el body
    //se definen dentro de la función y se inyectan en la consulta SQL
    const role = req.body.role;
    const name = req.body.name;
    const typeId = req.body.typeId;
    const id = req.body.id;
    const mail = req.body.mail;
    const pass = req.body.pass;
    const phone1 = req.body.phone1;
    const phone2 = req.body.phone2;
    const address = req.body.address;
    //se realiza el query de inserción en la tabla de usuarios 
    con.query("INSERT INTO users (user_id, user_type_id, user_mail, user_name, user_pass, user_phone1, user_phone2, user_address) VALUES (?,?,?,?,?,?,?,?);",
    [id, typeId, mail, name, pass, phone1, phone2, address],
    (err, result) => {
        if (err) console.log(err)

    });
    //se realiza el query de inserción en la tabla proponentes 
    con.query("INSERT INTO proponent (proponent_id, proponent_role, proponent_user_id) VALUES (?,?,?);", 
    [null, role, id],
    (err, result) => {
        if (err) console.log(err)
        
    });
    res.status(200);
});
//Función para retornar usuarios
router.get('/:mail/:password', (req, res) =>{
    const {mail, password} = req.params;
    console.log("Trajo" +mail + password);
    con.query("SELECT user_name, user_id, user_mail FROM users WHERE user_mail = ? AND user_pass = ?;", [mail, password],(err, result)=>{
        if (err) {
            console.log(err);
        }else if (result==0){
            console.log("vacio");
        }else {
            console.log("Obtuvo usuario");
        }
        console.log(result);
        res.send(result);
    });
});

module.exports = router;