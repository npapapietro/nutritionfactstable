import React from "react";
import "./NutritionItem.scss";
import { MetricUnits } from "../utils/ServingSize";

export enum ENutritionItem {
    Fat,
    Cholesterol,
    Sodium,
    Carbs,
    Protein
}

export interface INutritionItem{
    amount: number,
    dailyValue: number,
    name: ENutritionItem,
    units: MetricUnits,
    children: INutritionItem[]
}