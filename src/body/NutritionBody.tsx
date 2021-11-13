import React from "react";
import ISingleNutrient, { MajorNutritionItems } from "./NutritionItem";
import styled from "styled-components";

export interface INutritionItems {
  items: ISingleNutrient[];
  calories: number;
  caloriesFromFat?: number;
}

const THead = () => {
  const SmallRow = styled.th`
    font-size: 0.7rem;
  `;
  return (
    <thead>
      <tr>
        <SmallRow colSpan={3}>Amount Per Serving</SmallRow>
      </tr>
    </thead>
  );
};

const Calories = (props: { calories: number; caloriesFromFat?: number }) => {
  const ThickRowTh = styled.th`
    border-top-width: 5px;
  `;

  return (
    <tr>
      <ThickRowTh colSpan={2}>
        <b>Calories</b> {props.calories}
      </ThickRowTh>

      <td>
        {props.caloriesFromFat && `Calories from Fat ${props.caloriesFromFat}`}
      </td>
    </tr>
  );
};

const NutritionMajor = (props: INutritionItems) => {
  const ThickRowTd = styled.td`
    border-top-width: 5px;
  `;

  const NTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    td:last-child {
      text-align: right;
    }
    th, td {
      font-weight: normal;
      text-align: left;
      padding: 0.25rem 0;
      border-top: 1px solid black;
      white-space: nowrap;
    }
    thead tr th {
        border: 0;
      }
  `;

  return (
    <NTable>
      <THead />
      <tbody>
        <Calories {...props} />
        <tr>
          <ThickRowTd colSpan={3}>
            <b>% Daily Value*</b>
          </ThickRowTd>
        </tr>
        {MajorNutritionItems(props.items)}
      </tbody>
    </NTable>
  );
};

export default NutritionMajor;
