import React from "react";
import ProyectItem from "../components/ProyectItem";

const ProyectsList = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="table-active">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <ProyectItem />
        </tbody>
      </table>
    </div>
  );
};

export default ProyectsList;
