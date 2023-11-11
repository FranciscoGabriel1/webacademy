import React, { useState } from "react";

const QuadradoArea: React.FC = () => {
  const [lado, setLado] = useState(0);

  function calcularArea() {
    const area = lado * lado;
    alert(`A área do quadrado é: ${area}`);
  }

  return (
    <fieldset>
      <legend>Calcular Área do Quadrado</legend>
      <div>
        <label>Lado:</label>
        <input
          type="number"
          placeholder="Informe o lado"
          onChange={(e) => setLado(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calcularArea}>Calcular Área</button>
    </fieldset>
  );
};

export default QuadradoArea;
