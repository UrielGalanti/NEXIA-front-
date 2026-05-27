import React from "react";
import PorCorregir from "../PorCorregir";
import './materia.css';

const Materia = ({titulo,unidad }) => {
  return (
    <div className="card">
        {unidad}
        <h2>{titulo}</h2>
    </div>
  );
};

export default Materia;