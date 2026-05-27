import React from "react";
import PorCorregir from "../PorCorregir";
import './materia.css';

const Materia = ({ materia, grado, aCorregir }) => {
  return (
    <div className="card">
        <h2>{materia} {grado}</h2>
    </div>
  );
};

export default Materia;