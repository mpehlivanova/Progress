import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import "./App.css";
import Instruments from "./components/Instruments";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ContainerApp = styled("div")`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  gap: 1px;
  margin: auto;
`;
const Text = styled("h2")`
  margin: 0px;
  pading: 0px;
  color: #1a90ff;
`;
const Div = styled("div")`
  min-width: 500px;
  height: 80px;
  padding: 2px 0px 20px 0px;
`;

function App() {
  const [data, setData] = useState([]);
  const [isSort, setIsSort] = useState(true);

  const fechfunction = () => {
    fetch("http://www.deltastock.com/TEST/data.txt")
      .then((response) => response.json())
      .then((res) => {
        if (res) {
          setData(res.instruments);
        }
      });
  };
  useEffect(() => {
    fechfunction();
  }, []);

  return (
    <div className="App">
      <ContainerApp>
        <Div>
          <Text>
            Най-търгувани <KeyboardDoubleArrowRightIcon sx={{ m: 0 }} />
          </Text>
          <h3>Реални клиенти - настроения</h3>
        </Div>

        {isSort
          ? data
              .sort((el1, el2) => {
                return el1.dispCode.localeCompare(el2.dispCode);
              })
              .map((el, i) => {
                return (
                  <>
                    <Instruments
                      backgroundColor={i % 2 === 0 ? "#ebf1fc" : "#eceef1"}
                      key={i}
                      text={el.dispCode}
                      procentBay={`${el.sentiment} %`}
                      procentSell={`${100 - Number(el.sentiment)} %`}
                      value={Number(el.sentiment)}
                      onClick={() => setIsSort(false)}
                    />
                  </>
                );
              })
          : data
              .sort((el1, el2) => {
                return el1.sentiment - el2.sentiment;
              })
              .map((el, i) => {
                return (
                  <>
                    <Instruments
                      backgroundColor={i % 2 === 0 ? "#ebf1fc" : "#eceef1"}
                      key={i}
                      text={el.dispCode}
                      procentBay={`${el.sentiment} %`}
                      procentSell={`${100 - Number(el.sentiment)} %`}
                      value={Number(el.sentiment)}
                      onClick={() => setIsSort(true)}
                    />
                  </>
                );
              })}
      </ContainerApp>
    </div>
  );
}

export default App;
