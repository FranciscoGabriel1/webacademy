import React from "react";
import ParImpar from "./ParImpar";
import TrianguloArea from "./TrianguloArea";
import TrapezioArea from "./TrapezioArea";
import QuadradoArea from "./QuadradoArea";
import VerificarNumeroPrimo from "./VerificarNumeroPrimo";

// import { Container } from './styles';

const Calculadora: React.FC = () => {
  return (
    <>
      <ParImpar />
      <TrianguloArea />
      <TrapezioArea />
      <QuadradoArea />
      <VerificarNumeroPrimo />
    </>
  );
};

export default Calculadora;
