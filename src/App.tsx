import { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "./styles";

interface Candidato {
  nm: string;
  pvap: string;
  vap: string;
}

interface Candidatos {
  cand: Candidato[];
}

function App() {
  const [votos, setVotos] = useState<Candidato[]>([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const result = await axios.get<Candidatos>(
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    );

    setVotos(result.data.cand);
  };

  const convertQtd = (qtd: string) => {
    return parseInt(qtd).toLocaleString("pt-BR");
  };

  return (
    <Container>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Quantidade</th>
          <th>Porcentagem</th>
        </tr>
      </thead>

      <tbody>
        {votos.map((cand, idx) => (
          <tr key={`tr-${idx}`}>
            <td key={`name-${idx}`}>{cand.nm}</td>
            <td key={`qtd-${idx}`}>{convertQtd(cand.vap)}</td>
            <td key={`pct-${idx}`}>{cand.pvap}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}

export default App;
