import { useState, useEffect } from "react";
import axios from "axios";

import { CandTable } from "./components/CandTable/index";

import { constants } from "./constants/index";
import { Candidato, Candidatos } from "./types/index";
import { Container } from "./styles";

function App() {
  const [pres, setPres] = useState<Candidato[]>([]);
  const [gov, setGov] = useState<Candidato[]>([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const pres = await axios.get<Candidatos>(constants.URL_PRES);
    const gov = await axios.get<Candidatos>(constants.URL_GOV_RJ);

    setPres(pres.data.c);
    setGov(gov.data.c);
  };

  return (
    <Container>
      <CandTable c={pres} title="Presidente" />
      <CandTable c={gov} title="Governador RJ" />
    </Container>
  );
}

export default App;
