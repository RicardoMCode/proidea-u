import { useState } from "react";

const useProjectState = () => {
  //States para almacenar los datos del proyecto seleccionado
  const [id, setId] = useState(null);
  const [area, setArea] = useState(null);
  const [linea, setLinea] = useState(null);
  const [type, setType] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [obs, setObs] = useState(null);
  const [startDay, setStartDay] = useState(null);
  const [status, setStatus] = useState(null);
  const [comments, setComments] = useState([]);
  function addComments(new_comentary){
    const new_coments = [...comments,...new_comentary];
    setComments(new_coments);
  };
  return {
    id,
    setId,
    area,
    setArea,
    linea,
    setLinea,
    type,
    setType,
    name,
    setName,
    description,
    setDescription,
    obs,
    setObs,
    startDay,
    setStartDay,
    status,
    setStatus,
    comments, 
    setComments,
    addComments
  };
};

export default useProjectState;
