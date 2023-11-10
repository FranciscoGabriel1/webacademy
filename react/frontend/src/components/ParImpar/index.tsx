import React, { useState } from 'react';


export const ParImpar: React.FC = () => {
    const [number, setNumber] = useState(0);

    function parImpar(){
         alert(number%2==0 ?"Par":"Impar")
    }
    
  return (
    <fieldset>
        <legend>Eh par ou impar?</legend>
        <input placeholder="Informe um numero" onChange={(e)=>setNumber(parseInt(e.target.value))}/>
        <button onClick={()=>parImpar()}>Verificar</button>
    </fieldset>
  );
}

export default ParImpar;