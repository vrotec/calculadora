import styled from "styled-components";
export const CalculatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const CalculatorContents = styled.div`
  display: inline-grid;
  justify-content: center;
  align-content: center;
  width: auto;
  max-height: 95vh;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: minmax(60px, auto) repeat(5, 80px);
  gap: 4px;
  padding: 20px;
  background-color: #202122;
  border-radius: 7px;
`;

export const CalculatorDisplay = styled.input`
  display: flex;
  background-color: #f1ffed;
  border-radius: 4px;
  grid-column: span 4;
  font-family: "Calculator", sans-serif;
  font-size: 64px;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
  color: #333;
`;

export const ButtonOperation = styled.button`
  background-color: #f4f7f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 44px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cef2ff;
  }

  &:active {
    background-color: #ccc;
  }
`;

export const ButtonDadosNum = styled.button`
  background-color: #456;
  border: 1px solid #666;
  border-radius: 4px;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 44px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #678;
  }

  &:active {
    background-color: #000;
  }
`;

export const ButtonLimpar = styled.button`
  background-color: #e80000;
  border: 1px solid #e80000;
  border-radius: 4px;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 44px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f73100;
  }

  &:active {
    background-color: #c9302c;
  }
`;
