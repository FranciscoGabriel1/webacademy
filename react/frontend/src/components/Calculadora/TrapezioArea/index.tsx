import React, { useState } from "react";

const TrapezioArea: React.FC = () => {
  const [baseMaior, setBaseMaior] = useState(0);
  const [baseMenor, setBaseMenor] = useState(0);
  const [altura, setAltura] = useState(0);
  function calcularArea() {
    const area = ((baseMaior + baseMenor) * altura) / 2;
    alert(`A área do trapézio é: ${area}`);
  }
  return (
    <fieldset>
      <legend>Calcular Área do Trapézio</legend>
      <div>
        <label>Base Maior:</label>
        <input
          type="number"
          placeholder="Informe a base maior"
          onChange={(e) => setBaseMaior(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Base Menor:</label>
        <input
          type="number"
          placeholder="Informe a base menor"
          onChange={(e) => setBaseMenor(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Altura:</label>
        <input
          type="number"
          placeholder="Informe a altura"
          onChange={(e) => setAltura(parseFloat(e.target.value))}
        />
      </div>{" "}
      <button onClick={calcularArea}>Calcular Área</button>
    </fieldset>
  );
};

export default TrapezioArea;
