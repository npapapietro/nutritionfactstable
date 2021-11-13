import { INutritionItems } from "./NutritionBody";
import { MinorNutritionItems } from "./NutritionItem";
import styled from "styled-components";

const NutritionTable = styled.table`
  border-collapse: collapse;
  margin: 0 0 0.5rem 0;
  width: 100%;
  td,
  th {
    font-weight: normal;
    text-align: left;
    padding: 0.25rem 0;
    border-top: 1px solid black;
    white-space: nowrap;
  }

  thead tr th {
    border: 0;
  }
  td:last-child {
    text-align: left;
    ::before {
      font-weight: bold;
      margin: 0 0.25rem 0 0;
    }
  }
`;

const NutritionFacts = (props: INutritionItems) => (
  <NutritionTable>
    <tbody>{MinorNutritionItems(props.items)}</tbody>
  </NutritionTable>
);

export default NutritionFacts;
