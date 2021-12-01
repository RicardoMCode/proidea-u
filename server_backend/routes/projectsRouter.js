const express = require("express");
const mysql = require("mysql");
const router = express.Router();
//Creamos la conección a la DB
const con = require("./conection");
con.conection;

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
  con.query(
    "INSERT INTO project (project_id, project_name, project_area, project_type, project_line, project_description, project_obs, project_start_date, project_status, project_user_id) VALUES (?,?,?,?,?,?,?,?,?,?);",
    [null, name_p, area, type, line, description, obs, today, status, id_user],
    (err, result) => {
      if (err) console.log(err);
    }
  );
  res.status(200);
});

//Función para retornar la info básica de todos los proyectos
router.get("/", (req, res) => {
  con.query("SELECT * FROM project;", (err, result) => {
    // if (err) {
    //     console.log(err);
    // }else if (result==0){
    //     console.log("vacio sin error");
    // }else {
    //     console.log("Obtuvo objeto all projects");
    // }
    res.send(result);
  });
});

//Función para retornar la info completa de un sólo proyecto dado su id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  con.query(
    "SELECT * FROM project WHERE project_id = ? ;",
    [id],
    (err, result) => {
      // if (err) {
      //     console.log(err);
      // }else if (result==0){
      //     console.log("vacio sin error project/:id");
      // }else {
      //     console.log("Obtuvo objeto project/:id");
      // }
      res.send(result);
    }
  );
});

//Función para retornar la info de todos los proyectos de un proponente especifico
router.get("/byproponent/:id_proponent", (req, res) => {
  const { id_proponent } = req.params;
  con.query(
    "SELECT *  FROM project WHERE project_user_id = ? ;",
    [id_proponent],
    (err, result) => {
      // if (err) {
      //     console.log(err);
      // }else if (result==0){
      //     console.log("vacio sin error projectByProponent/:id_proponent");
      // }else {
      //     console.log("Obtuvo objeto projectByProponent/:id_proponent");
      // }
      res.send(result);
    }
  );
});

const mail = require("nodemailer");
//Función para actualizar el estado y PARA EL ENVIO DE CORREO
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const project_status = req.body.status;
  const comentary = req.body.comentary;
  //se realiza el query de consulta e inserción
  con.query(
    "UPDATE project SET project_status = (?) WHERE project_id = ? ;",
    [project_status, id],
    (err, result) => {
      if (err) console.log(err);
      res.status(200);
    }
  );
  //Hago un query para obtener el nombre y correo del proponente que presentó la idea que se está actualizando
  con.query(
    `SELECT u.user_name, u.user_mail, p.project_name FROM users u JOIN project p ON u.user_id = p.project_user_id WHERE p.project_id = '${id}' ;`,
    (err, result) => {
      if (err) console.log(err);
      let email = result[0].user_mail;
      let name = result[0].user_name;
      let name_p = result[0].project_name;
      // ENVIO CORREO DE CONFIRMACIÓN DE CAMBIO DE ESTADO
      mail.createTestAccount((err, account) => {
        //Formato del mensaje, usando template literan puedo poner datos de la person ao info dentro del mensaje
        const htmlEmail = `<h1>👋 - Hola - ${name}</h1>
            <hr/>
            <p>El proyecto "${name_p}", que usted propuso por medio de nuestra aplicación, presenta la siguiente actualización:</p>
            <spam> ${comentary} </spam>
            <p>Puede validar esta información directamente en la aplicación PROIDEA-U y hacer revisión del estado de su solicitud.</p>
            <br/>
            <hr/>
            <p>Este correo es generado de forma automatica, NO RESPONDA A ESTE CORREO por que será ignorado.
            Para hacer seguimiento a su solicitud ingrese directamente a la aplicación. <p/>`;
        //Cuenta a la que asocio el envio de correos , para este caso creé una cuenta a nombre de la app ya que es necesario registrar el pass
        let datamail = mail.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: "proideau@gmail.com",
            pass: "123456+/",
          },
        });
        //Info del mail, aquí recibo por parametor el correo
        let mailOption = {
          to: email,
          // replyTo: email,
          subject: `Actualización del estado del proyecto Nro.${id} en PROIDEA-U`,
          html: htmlEmail,
        };
        datamail.sendMail(mailOption, (err, info) => {
          if (err) {
            return console.log(err);
          } 
          // else console.log(info);
        });
      });
    }
  );
});

module.exports = router;
