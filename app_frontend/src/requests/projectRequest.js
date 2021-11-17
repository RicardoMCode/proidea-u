//Para peticiones a la Api
import Axios from "axios";
//HTTP Request
const BaseUrl = "http://localhost:3001/api/v1/projects/";
function projectRequest() {
  //Metodo POS de creación de nuevo proyecto name, area, type, line, description, today, status, id_user
  const createProject = (
    name,
    area,
    type,
    line,
    description,
    obs,
    today,
    status,
    id_user
  ) => {
    let rta = false;
    Axios.post(BaseUrl, {
      name_p: name,
      area: area,
      type: type,
      line: line,
      description: description,
      obs: obs,
      today: today,
      status: status,
      id_user: id_user,
    })
      .then((rta = true))
      .catch((err) => console.error(err));

    return rta;
  };

  //Metodo GET que consulta todos pos proyectos
  async function getProjects() {
    return await Axios.get(BaseUrl);
  }

  //Metodo GET que consulta el proyecto dado el ID
  async function getProjectById(id) {
    return await Axios.get(BaseUrl + id);
  }

  //Metodo GET que consulta proyectos dado el id del proponente
  async function getProjectByIdUser(id) {
    return await Axios.get(BaseUrl + "byproponent/" + id);
  }

  return { createProject, getProjects, getProjectById, getProjectByIdUser};
}

export default projectRequest;
