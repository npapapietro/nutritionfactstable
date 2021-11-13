import { IServingSize, ServingSize } from "../utils/ServingSize";
import styled from "styled-components";

interface INutritionHeader {
  servingSize: IServingSize;
}

const NHeader = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin: 0 0 0.25rem 0;
`;

const NP = styled.p`
  margin: 0;
`;

const NHeaderDiv = styled.div`
  border-bottom: 10px solid black;
  padding: 0 0 0.25rem 0;
  margin: 0 0 0.5rem 0;
`;

const NutritionHeader = (props: INutritionHeader) => {
  const { servingSize } = props;
  const servingSizeInstance = new ServingSize(servingSize);
  return (
    <NHeaderDiv>
      <NHeader>Nutrition Facts</NHeader>
      <NP>{servingSizeInstance.toString()}</NP>
      <NP>{`Serving Per Container ${servingSizeInstance.servingNumber}`}</NP>
    </NHeaderDiv>
  );
};

export default NutritionHeader;
