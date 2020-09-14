import React from "react";
import { INutritionItems } from "./NutritionBody";
import { MinorNutritionItems } from "./NutritionItem";

export default class NutritionFacts extends React.Component<INutritionItems>{
    render(){
        return(
            <table className="NutritionFacts__table--grid">
                <tbody>
                    {MinorNutritionItems(this.props.items)}
                </tbody>
            </table>
        )
    }
}