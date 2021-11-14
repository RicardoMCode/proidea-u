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
    console.log("Connected in projects!");  
  });  

//Función para crear un proyecto en la DB usando HTTP-Pos
router.post("/", (req, res) => {
    //recibe el objeto "req" con los datos del proyecto almacenados en el body
    //se definen dentro de la función y se inyectan en la consulta SQL
    const name_p = req.body.name_p;
    const area = req.body.area;
    const type = req.body.type;
    const line = req.body.line;
    const description = req.body.description;
    const obs = req.body.obs;
    const today = req.body.today;
    const status = req.body.status;
    const id_user = req.body.id_user;
    //se realiza el query de inserción en la tabla de usuarios  
    con.query("INSERT INTO project (project_id, project_name, project_area, project_type, project_line, project_description, project_obs, project_start_date, project_status, project_user_id) VALUES (?,?,?,?,?,?,?,?,?,?);",
    [null, name_p, area, type, line,description ,obs , today, status, id_user],
    (err, result) => {
        if (err) console.log(err)

    });
    res.status(200);
});

//Función para retornar la info básica de todos los proyectos
router.get('/', (req, res) =>{
    con.query("SELECT project_id, project_name, project_start_date, project_area, project_type, project_status  FROM project;",(err, result)=>{
        if (err) {
            console.log(err);
        }else if (result==0){
            console.log("vacio sin error");
        }else {
            console.log("Obtuvo objeto");
        }
        console.log(result);
        res.send(result);
    });
});

//Función para retornar la info completa de un sólo proyecto
router.get('/:id', (req, res) =>{
    const {id} = req.params;
    con.query("SELECT *  FROM project WHERE project_id = ? ;",[id],(err, result)=>{
        if (err) {
            console.log(err);
        }else if (result==0){
            console.log("vacio sin error");
        }else {
            console.log("Obtuvo objeto");
        }
        console.log(result);
        res.send(result);
    });
});

module.exports = router;