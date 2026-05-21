import React from "react";
import PorCorregir from "../PorCorregir";
import 'materia.css';

const Materia = ({ materia, grado, aCorregir }) => {
  return (
    <div className="card">
        <h2>{subject} {grade}</h2>
      <section className="cardBody">
        <PorCorregir aCorregir={aCorregir}/>
      </section>
    </div>
  );
};

export default Materia;