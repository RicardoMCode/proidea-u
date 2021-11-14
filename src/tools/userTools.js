//Modulo para encriptar pass
import md5 from "js-md5";
//import bycrpt from "bcrypt";
function userTools() {

  //Metodo que valida si el correo es valido
  const emailValidate = (valor) => {
    const re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (re.exec(valor)) {
      return true;
    } else {
      return false;
    }
  };

  //Metodo de cifrado
  const cifrarPass = (pass) => {return md5(pass)};

   return { emailValidate, cifrarPass};
}

export default userTools;
