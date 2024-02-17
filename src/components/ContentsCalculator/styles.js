import styled from "styled-components";

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
