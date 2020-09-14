import { MetricUnits } from "./ServingSize";

/**
 * All FDA nutrients required for reporting
 */
export enum ENutritionItem {
    Fat = 1,
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
    PantothenicAcid,
    Riboflavin,
    Selenium,
    Thiamin,
    Zinc
}

/** Details for Each Nutrition Item as tracked by 
 *  fda.gov
*/
export interface ILookupDetails {
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
    /**
     * Is this shown in table view or as a footer.
     * 
     * Example: Vitamin A - K
     */
    minorItem?: boolean
}

export const NutritionLookUp: { [key in ENutritionItem]: ILookupDetails } = {
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
        parent: ENutritionItem.TotalCarb
    },

    [ENutritionItem.Protein]: {
        dailyValue: -1,
        units: MetricUnits.Gram,
        name: "Protein",
    },

    [ENutritionItem.Calcium]: {
        dailyValue: 1300,
        units: MetricUnits.Milligram,
        name: "Calcium",
        minorItem: true
    },
    [ENutritionItem.Magnesium]: {
        dailyValue: 420,
        units: MetricUnits.Milligram,
        name: "Magnesium",
        minorItem: true
    },
    [ENutritionItem.Manganese]: {
        dailyValue: 2.3,
        units: MetricUnits.Milligram,
        name: "Manganese",
        minorItem: true
    },
    [ENutritionItem.Phosphorus]: {
        dailyValue: 1250,
        units: MetricUnits.Milligram,
        name: "Phosphorus",
        minorItem: true
    },

    [ENutritionItem.VitaminC]: {
        dailyValue: 90,
        units: MetricUnits.Milligram,
        name: "Vitamin C",
        minorItem: true
    },
    [ENutritionItem.VitaminD]: {
        dailyValue: 20,
        units: MetricUnits.Microgram,
        name: "Vitamin D",
        minorItem: true
    },
    [ENutritionItem.VitaminK]: {
        dailyValue: 120,
        units: MetricUnits.Microgram,
        name: "Vitamin K",
        minorItem: true
    },
    [ENutritionItem.VitaminA]: {
        dailyValue: 9000,
        units: MetricUnits.MicrogramRAE,
        name: "Vitamin A",
        minorItem: true
    },
    [ENutritionItem.VitaminB6]: {
        dailyValue: 1.7,
        units: MetricUnits.Milligram,
        name: "Vitamin B6",
        minorItem: true
    },
    [ENutritionItem.VitaminB12]: {
        dailyValue: 2.4,
        units: MetricUnits.Microgram,
        name: "Vitamin B12",
        minorItem: true
    },
    [ENutritionItem.VitaminE]: {
        dailyValue: 15,
        units: MetricUnits.Milligram,
        name: "Vitamin E",
        minorItem: true
    },

    [ENutritionItem.Biotin]: {
        dailyValue: 30,
        units: MetricUnits.Microgram,
        name: "Biotin",
        minorItem: true
    },
    [ENutritionItem.Chloride]: {
        dailyValue: 2300,
        units: MetricUnits.Milligram,
        name: "Chloride",
        minorItem: true
    },
    [ENutritionItem.Choline]: {
        dailyValue: 550,
        units: MetricUnits.Milligram,
        name: "Choline",
        minorItem: true
    },
    [ENutritionItem.Chromium]: {
        dailyValue: 35,
        units: MetricUnits.Microgram,
        name: "Chromium",
        minorItem: true
    },
    [ENutritionItem.Copper]: {
        dailyValue: 0.9,
        units: MetricUnits.Microgram,
        name: "Copper",
        minorItem: true
    },
    [ENutritionItem.FolicAcid]: {
        dailyValue: 400,
        units: MetricUnits.MicrogramDFE,
        name: "Folic Acid",
        minorItem: true
    },
    [ENutritionItem.Molybdenum]: {
        dailyValue: 45,
        units: MetricUnits.Microgram,
        name: "Molybdenum",
        minorItem: true
    },
    [ENutritionItem.Niacin]: {
        dailyValue: 16,
        units: MetricUnits.MilligramNE,
        name: "Niacin",
        minorItem: true
    },
    [ENutritionItem.PantothenicAcid]: {
        dailyValue: 5,
        units: MetricUnits.Milligram,
        name: "Pantothenic Acid",
        minorItem: true
    },
    [ENutritionItem.Riboflavin]: {
        dailyValue: 1.3,
        units: MetricUnits.Milligram,
        name: "Riboflavin",
        minorItem: true
    },
    [ENutritionItem.Selenium]: {
        dailyValue: 55,
        units: MetricUnits.Microgram,
        name: "Selenium",
        minorItem: true
    },
    [ENutritionItem.Thiamin]: {
        dailyValue: 1.2,
        units: MetricUnits.Milligram,
        name: "Thiamin",
        minorItem: true
    },
    [ENutritionItem.Zinc]: {
        dailyValue: 11,
        units: MetricUnits.Milligram,
        name: "Zinc",
        minorItem: true
    },
}


