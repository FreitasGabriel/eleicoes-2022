import { Candidato } from "../../types/index";
import { Table, Container, Title } from "./styles";

interface TableProps {
  c: Candidato[];
  title: string;
}

export const CandTable = ({ c, title }: TableProps) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Porcentagem</th>
          </tr>
        </thead>

        <tbody>
          {c.map((cand, idx) => (
            <tr key={`tr-${idx}`}>
              <td key={`name-${idx}`}>{cand.nc}</td>
              <td key={`qtd-${idx}`}>
                {parseInt(cand.v).toLocaleString("pt-BR")}
              </td>
              <td key={`pct-${idx}`}>{cand.vp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
