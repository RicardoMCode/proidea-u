import React from "react";

const ComentaryItem = (props) => {
  //props
  const [id, user_name, type_user, comentary_date, comentary] = props.itemList;
  //Convierto las fechas del sistema para que sean legibles
  let dt = new Date(comentary_date);
  let mm = dt.getMonth() + 1;
  let dd = dt.getDate();
  let yy = dt.getFullYear();
  let date = `${dd}-${mm}-${yy}`;
  let type;
  if (type_user == "useradmin") type = "Administrador";
  else if (type_user == "useranalyst") type = "Analista";
  else type = "Proponente";
  return (
    <div>
      <div className="comentary_lbl">
        <label className="info_comentary">{`${user_name} - ${type}`}</label>
        <label className="text_comentary">{comentary}</label>
        <label className="info_comentary_date">{`${date}`}</label>
        <hr />
      </div>
    </div>
  );
};

export default ComentaryItem;
