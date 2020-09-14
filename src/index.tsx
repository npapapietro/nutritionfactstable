import React from 'react';

import './index.scss';
import NutritionHeader from './body/NutritionHeader';
import NutritionMajor, { INutritionItems } from './body/NutritionBody';
import NutritionFacts from './body/NutritionFacts';
import { ENutritionItem, NutritionLookUp } from './utils/NutritionItemData';
import { IServingSize, ImperialUnits, MetricUnits } from './utils/ServingSize';


export type ServingSize = IServingSize;
export type NutrientItems = INutritionItems;

export interface INutritionFactTableProps{
    servingSizeInformation: ServingSize,
    nutritionItems: NutrientItems
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

export { ENutritionItem, ImperialUnits, MetricUnits, NutritionLookUp };    
