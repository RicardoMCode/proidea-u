const express = require("express");
const mysql = require("mysql");
const router = express.Router();
//Creamos la conección a la DB
const con = require("./conection");
con.conection;

//Función para crear un proyecto en la DB usando HTTP-Pos
router.post("/", (req, res) => {
  const id_project = req.body.id_project;
  const id_user = req.body.id_user;
  const type_user = req.body.type_user;
  const date = req.body.date;
  const comentary = req.body.comentary;
  //se realiza el query de inserción en la tabla de usuarios
  con.query(
    'INSERT INTO comentary (comentary_id, comentary_project_id, comentary_user_id, comentary_type_user, comentary_date, comentary) VALUES (?,?,?,?,?,?);',
    [null,id_project,id_user,type_user,date,comentary],  
    (err, result) => {
      if (err) console.log(err);
    }
  );
  res.status(200);
});

//Función para retornar comentarios de un sólo proyecto dado su id
router.get('/:id', (req, res) =>{
  const {id} = req.params;
  con.query(`SELECT c.comentary_id, u.user_name , c.comentary_type_user, c.comentary_date, comentary
              FROM comentary c 
              JOIN users u ON u.user_id = c.comentary_user_id
              JOIN project p ON p.project_id = c.comentary_project_id
              WHERE c.comentary_project_id = '${id}'
              ORDER BY c.comentary_id;`,(err, result)=>{
      if (err) {
          console.log(err);
      }
      // console.log(result);
      res.send(result);
  });
});


module.exports = router;
