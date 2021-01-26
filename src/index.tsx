import './main.css';
import NutritionHeader from './body/NutritionHeader';
import NutritionMajor, { INutritionItems } from './body/NutritionBody';
import NutritionFacts from './body/NutritionFacts';
import { IServingSize } from './utils/ServingSize';

export { ENutritionItem, NutritionLookUp } from './utils/NutritionItemData';
export type {INutritionItems} from './body/NutritionBody';
export {ImperialUnits, MetricUnits} from "./utils/ServingSize";
export type {IServingSize, ServingSize, } from "./utils/ServingSize";
export interface INutritionFactTableProps{
    servingSizeInformation: IServingSize,
    nutritionItems: INutritionItems
}

export default function NutritionFactTable(props: INutritionFactTableProps) {
    return (
        <section className="NutritionFacts">
            <NutritionHeader servingSize={props.servingSizeInformation} />
            <NutritionMajor {...props.nutritionItems} />
            <NutritionFacts {...props.nutritionItems} />
            <p className="small-info">
                * Percent Daily Values are based on a 2,000 calorie diet.
                Your daily values may be higher or lower depending on your calorie needs:
            </p>
        </section>
    );
}


