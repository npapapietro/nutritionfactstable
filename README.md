# NutritionFact Table

This is a static componenet for generating FDA's nutrition fact table.

## Suported Nutrients

* Fat
* Saturated Fat
* Trans Fat
* Cholesterol
* Sodium
* Total Carb
* Dietary Fiber
* Sugar
* Added Sugars
* Protein
* Calcium
* Magnesium
* Manganese
* Phosphorus
* Vitamin C
* Vitamin D
* Vitamin K
* Vitamin A
* Vitamin B6
* Vitamin B12
* Vitamin E
* Biotin
* Chloride
* Choline
* Chromium
* Copper
* Folic Acid
* Molybdenum
* Niacin
* Pantothenic Acid
* Riboflavin
* Selenium
* Thiamin
* Zinc

with each of recommended daily doses in their respective units. Supported units currently are:

Metric:

* gram - kilogram
* ml and liter
* IU
* mcg RAE
* mcg DFE
* mg NE

Imperial:

* tsp
* tbsp
* ounce
* cup
* custom

All units can suppressed with `fractionOverride` that gives the unit in terms of percentage.
## Example

```typescript
const ChococlateChipCookie = {
    items: [
        { amount: 14, nutritionItem: ENutritionItem.Fat },
        { amount: 9, nutritionItem: ENutritionItem.SaturatedFat },
        { amount: 0, nutritionItem: ENutritionItem.TransFat },
        { amount: 55, nutritionItem: ENutritionItem.Cholesterol },
        { amount: 40, nutritionItem: ENutritionItem.Sodium },
        { amount: 17, nutritionItem: ENutritionItem.TotalCarb },
        { amount: 1, nutritionItem: ENutritionItem.DietaryFiber },
        { amount: 14, nutritionItem: ENutritionItem.Sugar },
        { amount: 3, nutritionItem: ENutritionItem.Protein },
        { amount: 1, nutritionItem: ENutritionItem.VitaminA, fractionOverride: 0.1 },
        { amount: 1, nutritionItem: ENutritionItem.VitaminC, fractionOverride: 0  },
        { amount: 0, nutritionItem: ENutritionItem.Calcium, fractionOverride: 0.06 }
    ],
    calories: 200,
    caloriesFromFat: 130
}


const ChococlateChipCookieServing = {
    imperialUnits: ImperialUnits.Ounce,
    fractionalSize: "1",
    servingNumber: 1
} as IServingSize;

const props = {
    servingSizeInformation: ChococlateChipCookieServing,
    nutritionItems: ChococlateChipCookie
}


ReactDOM.render(<NutritionFactTable {...props}/>, document.getElementById('root'))
```

![alt text](./public/rendered.png)
