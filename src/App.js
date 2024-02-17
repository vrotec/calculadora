// Importando os módulos necessários
import React, { useState } from "react";
import { evaluate } from "mathjs";

// Importando os estilos e componentes necessários
import {
  CalculatorContainer,
  CalculatorContents,
  CalculatorDisplay,
  ButtonLimpar,
  ButtonDadosNum,
  ButtonOperation,
} from "./styles";

// Definindo o componente App
const App = () => {
  // Definindo o estado inicial do display do resultado
  const [resultDisplay, setResultDisplay] = useState("0");

  // Função para lidar com o clique nos botões
  const handleClick = (e) => {
    const buttonValue = e.target.innerText;
    // Verifica se já existe uma vírgula no display
    if (buttonValue === "," && resultDisplay.includes(",")) return;
    // Concatena o valor do botão ao display, substituindo vírgulas por pontos
    setResultDisplay(
      resultDisplay === "0"
        ? buttonValue
        : resultDisplay + buttonValue.replace(/,/g, ".")
    );
  };

  // Função para limpar o display
  const handleClickClear = () => {
    setResultDisplay("0");
  };

  // Função para calcular o resultado da expressão no display
  const handleClickCalc = () => {
    try {
      // Avalia a expressão no display, substituindo vírgulas por pontos
      const result = evaluate(resultDisplay.replace(/,/g, ".")).toString();
      setResultDisplay(result);
    } catch (error) {
      setResultDisplay("Error Calc");
    }
  };

  // Renderização do componente
  return (
    <CalculatorContainer>
      <CalculatorContents>
        {/* Display do resultado */}
        <CalculatorDisplay value={resultDisplay} />
        {/* Botão para limpar o display */}
        <ButtonLimpar onClick={handleClickClear}>CE</ButtonLimpar>
        <ButtonDadosNum onClick={handleClick}>(</ButtonDadosNum>
        <ButtonDadosNum onClick={handleClick}>)</ButtonDadosNum>
        <ButtonOperation onClick={handleClick}>%</ButtonOperation>
        <ButtonDadosNum onClick={handleClick}>7</ButtonDadosNum>
        <ButtonDadosNum onClick={handleClick}>8</ButtonDadosNum>
        <ButtonDadosNum onClick={handleClick}>9</ButtonDadosNum>
        <ButtonOperation onClick={handleClick}>/</ButtonOperation>
        <ButtonDadosNum onClick={handleClick}>4</ButtonDadosNum>
        <ButtonDadosNum onClick={handleClick}>5</ButtonDadosNum>
        <ButtonDadosNum onClick={handleClick}>6</ButtonDadosNum>
        <ButtonOperation onClick={handleClick}>*</ButtonOperation>
        <ButtonDadosNum onClick={handleClick}>1</ButtonDadosNum>
        <ButtonDadosNum onClick={handleClick}>2</ButtonDadosNum>
        <ButtonDadosNum onClick={handleClick}>3</ButtonDadosNum>
        <ButtonOperation onClick={handleClick}>-</ButtonOperation>
        <ButtonOperation onClick={handleClick}>,</ButtonOperation>
        <ButtonDadosNum onClick={handleClick}>0</ButtonDadosNum>
        {/* Botão para calcular o resultado */}
        <ButtonOperation onClick={handleClickCalc}>=</ButtonOperation>
        <ButtonOperation onClick={handleClick}>+</ButtonOperation>
      </CalculatorContents>
    </CalculatorContainer>
  );
};

// Exportando o componente App
export default App;
