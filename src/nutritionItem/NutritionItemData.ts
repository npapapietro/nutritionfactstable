import { MetricUnits } from "../utils/ServingSize";

export enum ENutritionItem {
    Fat,
    SaturatedFat,
    TransFat,

    Cholesterol,

    Sodium,

    TotalCarb,
    DietaryFiber,
    Sugar,
    AddedSugar,

    Protein,

    Calcium,
    Magnesium,
    Manganese,
    Phosphorus,

    VitaminC,
    VitaminD,
    VitaminK,
    VitaminA,
    VitaminB6,
    VitaminB12,
    VitaminE,

    Biotin,
    Chloride,
    Choline,
    Chromium,
    Copper,
    FolicAcid,
    Molybdenum,
    Niacin,
    PanthothenicAcid,
    Riboflavin,
    Selenium,
    Thiamin,
    Zinc
}

/** Details for Each Nutrition Item as tracked by 
 *  fda.gov
*/
interface ILookupDetails {
    /**
     *  -1 if unknown or not tracked
     */ 
    dailyValue: number,

    units: MetricUnits,
    name: string,
    /**
     * If related to a parent item. 
     * 
     * Example: Saturated Fat to Total Fat
     */
    parent?: ENutritionItem
}

const NutritionLookUp: {[key in ENutritionItem]: ILookupDetails} =  {
    [ENutritionItem.Fat]: {
        dailyValue: 78,
        units: MetricUnits.Gram,
        name: "Total Fat",
    },
    [ENutritionItem.SaturatedFat]: {
        dailyValue: 20,
        units: MetricUnits.Gram,
        name: "Saturated Fat",
        parent: ENutritionItem.Fat
    },
    [ENutritionItem.TransFat]: {
        dailyValue: 2,
        units: MetricUnits.Gram,
        name: "Trans Fat",
        parent: ENutritionItem.Fat
    },

    [ENutritionItem.Cholesterol]: {
        dailyValue: 300,
        units: MetricUnits.Milligram,
        name: "Cholesterol",
    },

    [ENutritionItem.Sodium]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Sodium",
    },

    [ENutritionItem.TotalCarb]: {
        dailyValue: 275,
        units: MetricUnits.Gram,
        name: "Total Carbohydrates",
    },
    [ENutritionItem.DietaryFiber]: {
        dailyValue: 28,
        units: MetricUnits.Gram,
        name: "Dietary Fiber",
        parent: ENutritionItem.TotalCarb
    },
    [ENutritionItem.Sugar]: {
        dailyValue: -1,
        units: MetricUnits.Gram,
        name: "Sugar",
        parent: ENutritionItem.TotalCarb
    },
    [ENutritionItem.AddedSugar]: {
        dailyValue: 50,
        units: MetricUnits.Gram,
        name: "Added Sugars",
        parent: ENutritionItem.Sugar
    },


    [ENutritionItem.Sodium]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Sodium",
    },
    [ENutritionItem.Sodium]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Sodium",
    },
    [ENutritionItem.Sodium]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Sodium",
    },
    [ENutritionItem.Sodium]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Sodium",
    },
    [ENutritionItem.Sodium]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Sodium",
    },
    [ENutritionItem.Sodium]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Sodium",
    },
    [ENutritionItem.Sodium]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Sodium",
    },
    [ENutritionItem.Sodium]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Sodium",
    },
    [ENutritionItem.Sodium]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Sodium",
    },
    [ENutritionItem.Sodium]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Sodium",
    },

}


// export interface INutritionItem{
//     amount: number,
//     dailyValue: number,
//     name: ENutritionItem,
//     units: MetricUnits,
//     children: INutritionItem[]
// }

// class NutritionItem implements INutritionItem{
//     amount!: number;
//     dailyValue!: number;
//     name: ENutritionItem = 0;
//     units: MetricUnits = 0;
//     children: INutritionItem[] = [];
//     constructor(item?: Partial<INutritionItem>){
//         Object.assign(this, item);
//     }
// }

// const Fat = ({amount, children}: Partial<INutritionItem>): NutritionItem => {
//     const item : NutritionItem = new NutritionItem({amount, children})
//     item.dailyValue = 65;
//     item.units = MetricUnits.Gram
//     item.
// }