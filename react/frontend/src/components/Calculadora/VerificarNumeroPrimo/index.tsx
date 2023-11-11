import React, { useState } from "react";
const VerificarNumeroPrimo: React.FC = () => {
  const [numero, setNumero] = useState(0);
  function verificarPrimo() {
    if (numero <= 1) {
      alert("O número não é primo.");
      return;
    }
    let primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        primo = false;
        break;
      }
    }
    alert(primo ? "O número é primo." : "O número não é primo.");
  }

  return (
    <fieldset>
      <legend>Verificar Número Primo</legend>
      <div>
        <label>Número:</label>
        <input
          type="number"
          placeholder="Informe um número"
          onChange={(e) => setNumero(parseInt(e.target.value))}
        />
      </div>
      <button onClick={verificarPrimo}>Verificar Primo</button>
    </fieldset>
  );
};

export default VerificarNumeroPrimo;
