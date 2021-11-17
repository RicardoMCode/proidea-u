//Para peticiones a la Api
import Axios from "axios";
//Herramientas de gestion programadas
import userTools from "../tools/userTools";
//Cifrado de contraseña
const { cifrarPass } = userTools();
//HTTP Request
let BaseUrl = "http://localhost:3001/api/v1/user/";
function userRequest() {
  //Metodo POS de creación de nuevo usuario
  const createUser = (
    role,
    name,
    typeId,
    id,
    mail,
    pass,
    phone1,
    phone2,
    address
  ) => {
    let rta = false;
    Axios.post(BaseUrl, {
      role: role,
      name: name,
      typeId: typeId,
      id: id,
      mail: mail.toLowerCase(),
      pass: cifrarPass(pass),
      phone1: phone1,
      phone2: phone2,
      address: address,
    })
      .then((rta = true))
      .catch((err) => console.error(err));

    return rta;
  };

//Metodo GET validar user y pass, retorna todos los datosS
  async function validateUser(mail, pass) {
    return await Axios.get(BaseUrl+"/"+mail+"/"+pass);
  }

  return { createUser,validateUser };
}

export default userRequest;