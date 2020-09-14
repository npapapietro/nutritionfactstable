import React from "react";
import { ENutritionItem, NutritionLookUp, ILookupDetails } from "../utils/NutritionItemData";

/**
 * A single nutrition item.
 */
export default interface ISingleNutrient {
    /**
     * Units must match nutrition Item units
     */
    amount: number,
    /**
     * Used for supplemental items where total amount isn't known
     * but only percentage is
     */
    fractionOverride?: number,
    /**
     * Corresponding Item in the Nutrition Data
     */
    nutritionItem: ENutritionItem
};


const FormatPercentage = (float: number): string => {
    return `${Math.round(100 * float)}%`
}

/**
 * Renders the children of a major nutrient item
 * @param item Child nutrient
 */
const ChildRow = (item: ISingleNutrient, idx: number) => {
    const {
        amount,
        nutritionItem
    } = item;

    const lookUp = NutritionLookUp[nutritionItem];

    return (
        <tr>
            <td key={`child-nest-${item.nutritionItem}-${idx}`} className="blank-cell" />
            <th>
                {lookUp.name} {`${amount}${lookUp.units}`}
            </th>
            {lookUp.dailyValue !== -1 ?
                <td><b>{FormatPercentage(amount / lookUp.dailyValue)}</b></td>
                : <td />}
        </tr>
    )
}

const ParentRow = (item: ISingleNutrient, idx: Number, end: boolean) => {
    const lookUp = NutritionLookUp[item.nutritionItem];
    return (
        <tr className={end ? "thick-end": undefined}>
            <th colSpan={2} key={`${idx}-${lookUp.name}`}>
                <b>{lookUp.name}</b> {item.amount}{lookUp.units}
            </th>
            {lookUp.dailyValue !== -1 ?
                <td><b>{FormatPercentage(item.amount / lookUp.dailyValue)}</b></td>
                : <td />}
        </tr>   
    )

}
export const MajorNutritionItems = (items: ISingleNutrient[]) => {


    const majorOnly = items.filter((val) => !(NutritionLookUp[val.nutritionItem].minorItem));
    const parents = majorOnly.filter((val) => !(NutritionLookUp[val.nutritionItem].parent));

    const nutrients: JSX.Element[] = [];
    parents.forEach((val, idx) => {
        nutrients.push(ParentRow(val, idx, idx === parents.length - 1))
        
        majorOnly
        .filter(x => val.nutritionItem === NutritionLookUp[x.nutritionItem].parent)
        .forEach((val, idx) => nutrients.push(ChildRow(val,idx)))
    });
    return nutrients;
}

export const MinorNutritionItems = (items: ISingleNutrient[]) => {

    const minorOnly = items.filter((val) => !!(NutritionLookUp[val.nutritionItem].minorItem));

    const nutrients: JSX.Element[] = [];
    for (var i = 0; i < minorOnly.length; i+=2){
        const itm1 = minorOnly[i];
        const lookUp1 = NutritionLookUp[itm1.nutritionItem];
        const percent1 = FormatPercentage(itm1.fractionOverride ?? (itm1.amount / lookUp1.dailyValue))

        let itm2 = minorOnly[i + 1];
        let lookUp2: ILookupDetails | null = null;
        let percent2: string = "";
        if (itm2){
            lookUp2 = NutritionLookUp[itm2.nutritionItem];
            percent2 = FormatPercentage(itm2.fractionOverride ?? (itm2.amount / lookUp2.dailyValue))
        }
        
        nutrients.push((
            <tr className={i >= minorOnly.length -2  ? "thin-end": undefined}>
                <td colSpan={2}>
                    {lookUp1.name} {percent1}
                </td>
                {itm2 ? 
                <td >
                    {lookUp2?.name} {percent2}
                </td> : <td/>}
            </tr>
        ))
    }

    return nutrients;
}