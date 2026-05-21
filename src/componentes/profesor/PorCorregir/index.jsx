
import React from "react";
import 'porCorregir.css';

const PorCorregir = ({aCorregir}) => {
  return (
<div>
          <span className="titulo">Archivos por corregir</span>
          <span className="valor">{aCorregir}</span>
</div>
  );
};

export default PorCorregir;