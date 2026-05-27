import React from "react";
import PorCorregir from "../PorCorregir";

const Contenido = ({titulo,descripcion,tipo}) => {
  return (
    <div className="card">
        
        <h2>{titulo}</h2>
        <h3>{tipo}</h3>
        <p>{descripcion}</p>
    </div>
  );
};

export default Contenido;