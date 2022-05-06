import * as React from "react";
import { styled } from "@mui/material/styles";
import ProgressBars from "./ProgressBars";

const Container = styled("div")`
  min-width: 500px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: whitesmoke;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: #e0e0e0;
  }
`;
const Text = styled("p")`
  margin: 0px;
  pading: 0px;
`;
const ContaonerProgres = styled("div")`
  min-width: 70%;
  height: 100%;
`;
const Procentos = styled("div")`
  min-width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 10px;
`;
export default function Instruments(props) {
  return (
    <>
      <Container
        onClick={props.onClick}
        sx={{ backgroundColor: ` ${props.backgroundColor}` }}
      >
        <Text>{props.text}</Text>
        <ContaonerProgres>
          <Procentos>
            <Text>{props.procentBay}</Text>
            <ProgressBars value={props.value} />
            <Text>{props.procentSell}</Text>
          </Procentos>
          <Procentos>
            <Text sx={{ ml: 5 }}>buy</Text>
            <Text sx={{ mr: 5 }}>sell</Text>
          </Procentos>
        </ContaonerProgres>
      </Container>
    </>
  );
}
