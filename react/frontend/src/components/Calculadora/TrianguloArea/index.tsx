import React, { useState } from "react";

const TrianguloArea: React.FC = () => {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);

  function calcularArea() {
    const area = (base * altura) / 2;
    alert(`A área do triângulo é: ${area}`);
  }

  return (
    <fieldset>
      <legend>Calcular Área do Triângulo</legend>
      <div>
        <label>Base:</label>
        <input
          type="number"
          placeholder="Informe a base"
          onChange={(e) => setBase(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Altura:</label>
        <input
          type="number"
          placeholder="Informe a altura"
          onChange={(e) => setAltura(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calcularArea}>Calcular Área</button>
    </fieldset>
  );
};
export default TrianguloArea;
