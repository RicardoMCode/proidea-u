//Para peticiones a la Api
import Axios from "axios";
//HTTP Request
const BaseUrl = "http://localhost:3001/api/v1/projects/comentary/";
function comentaryRequest() {  
    //Metodo POS de creación de nuevo comentario
    const createComentary = ( id_project, id_user, type_user, date, comentary ) => {
      let rta = false;
      Axios.post(BaseUrl, {
        id_project: id_project,
        id_user: id_user,
        type_user: type_user,
        date: date,
        comentary: comentary
      })
        .then((rta = true))
        .catch((err) => console.error(err));
  
      return rta;
    };
    //Metodo GET para obtener los comentarios dado el ID del proyecto
  async function getComentaryByIdProject(id) {
    return await Axios.get(BaseUrl + id);
  }

    return { createComentary, getComentaryByIdProject};
}
export default comentaryRequest;