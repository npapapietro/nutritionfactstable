import {
  ENutritionItem,
  NutritionLookUp,
  ILookupDetails,
} from "../utils/NutritionItemData";
import styled from "styled-components";

/**
 * A single nutrition item.
 */
export default interface ISingleNutrient {
  /**
   * Units must match nutrition Item units
   */
  amount: number;
  /**
   * Used for supplemental items where total amount isn't known
   * but only percentage is
   */
  fractionOverride?: number;
  /**
   * Corresponding Item in the Nutrition Data
   */
  nutritionItem: ENutritionItem;
}

const FormatPercentage = (float: number): string => {
  return `${Math.round(100 * float)}%`;
};

/**
 * Renders the children of a major nutrient item
 * @param item Child nutrient
 */
const ChildRow = (item: ISingleNutrient, idx: number) => {
  const { amount, nutritionItem } = item;
  const detail = NutritionLookUp[nutritionItem];
  const displayName = `${detail.name} ${amount}${detail.units}`;
  const showPercentage = detail.dailyValue !== -1;
  const key = `child-nest-${item.nutritionItem}-${idx}`;

  const LineItem = styled.td`
    width: 1rem;
    border-top: 0;
  `;

  return (
    <tr>
      <LineItem key={key} />
      <th>{displayName}</th>
      <LineItem>
        {showPercentage && (
          <b>{FormatPercentage(amount / detail.dailyValue)}</b>
        )}
      </LineItem>
    </tr>
  );
};

const ParentRow = (item: ISingleNutrient, idx: Number, end: boolean) => {
  const detail = NutritionLookUp[item.nutritionItem];
  const key = `${idx}-${detail.name}`;
  const showPercentage = detail.dailyValue !== -1;

  return (
    <tr style={end ? { borderBottom: "10px solid black" } : {}}>
      <th colSpan={2} key={key}>
        <b>{detail.name}</b> {item.amount}
        {detail.units}
      </th>
      <td>
        {showPercentage && (
          <b>{FormatPercentage(item.amount / detail.dailyValue)}</b>
        )}
      </td>
    </tr>
  );
};

export const MajorNutritionItems = (items: ISingleNutrient[]) => {
  const majorOnly = items.filter(
    (val) => !NutritionLookUp[val.nutritionItem].minorItem
  );
  const parents = majorOnly.filter(
    (val) => !NutritionLookUp[val.nutritionItem].parent
  );

  const nutrients: JSX.Element[] = [];
  parents.forEach((val, idx) => {
    nutrients.push(ParentRow(val, idx, idx === parents.length - 1));

    majorOnly
      .filter(
        (x) => val.nutritionItem === NutritionLookUp[x.nutritionItem].parent
      )
      .forEach((val, idx) => nutrients.push(ChildRow(val, idx)));
  });
  return nutrients;
};

export const MinorNutritionItems = (items: ISingleNutrient[]) => {
  const minorOnly = items.filter(
    (val) => !!NutritionLookUp[val.nutritionItem].minorItem
  );

  const nutrients: JSX.Element[] = [];
  for (var i = 0; i < minorOnly.length; i += 2) {
    const itm1 = minorOnly[i];
    const lookUp1 = NutritionLookUp[itm1.nutritionItem];
    const percent1 = FormatPercentage(
      itm1.fractionOverride ?? itm1.amount / lookUp1.dailyValue
    );

    let itm2 = minorOnly[i + 1];
    let lookUp2: ILookupDetails | null = null;
    let percent2: string = "";
    if (itm2) {
      lookUp2 = NutritionLookUp[itm2.nutritionItem];
      percent2 = FormatPercentage(
        itm2.fractionOverride ?? itm2.amount / lookUp2.dailyValue
      );
    }

    const end = i >= minorOnly.length - 2;
    const displayName = `${lookUp2?.name} ${percent2}`;

    nutrients.push(
      <tr style={end ? { borderBottom: "1px solid black" } : {}}>
        <td colSpan={2}>
          {lookUp1.name} {percent1}
        </td>
        {itm2 ? <td>{displayName}</td> : <td />}
      </tr>
    );
  }

  return nutrients;
};
