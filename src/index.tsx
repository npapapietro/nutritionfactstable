import NutritionHeader from "./body/NutritionHeader";
import NutritionMajor, { INutritionItems } from "./body/NutritionBody";
import NutritionFacts from "./body/NutritionFacts";
import { IServingSize } from "./utils/ServingSize";
import styled from "styled-components";
export { ENutritionItem, NutritionLookUp } from "./utils/NutritionItemData";
export type { INutritionItems } from "./body/NutritionBody";
export { ImperialUnits, MetricUnits } from "./utils/ServingSize";
export type { IServingSize } from "./utils/ServingSize";
export { ServingSize } from "./utils/ServingSize";
export interface INutritionFactTableProps {
  servingSizeInformation: IServingSize;
  nutritionItems: INutritionItems;
}

const Section = styled.section`
  width: 100%;
  border: 1px solid black;
  margin: 20px;
  float: left;
  width: 280px;
  padding: 0.5rem;
  font-size: small;
  line-height: 1.4;
`;

export default function NutritionFactTable(props: INutritionFactTableProps) {
  return (
    <Section>
      <NutritionHeader servingSize={props.servingSizeInformation} />
      <NutritionMajor {...props.nutritionItems} />
      <NutritionFacts {...props.nutritionItems} />
      <p>
        * Percent Daily Values are based on a 2,000 calorie diet. Your daily
        values may be higher or lower depending on your calorie needs:
      </p>
    </Section>
  );
}
