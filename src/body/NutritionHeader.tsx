import React from "react";
import { IServingSize, ServingSize } from "../utils/ServingSize";

export interface INutritionHeader {
    servingSize: IServingSize,
}

export default class NutritionHeader extends React.Component<INutritionHeader, {}> {
    render() {
        const {
            servingSize
        } = this.props;
        const servingSizeInstance = new ServingSize(servingSize);
        return (
            <div className="NutritionFacts__header">
                <h1>
                    Nutrition Facts
                </h1>
                <p>{servingSizeInstance.toString()}</p>
                <p>{`Serving Per Container ${servingSizeInstance.servingNumber}`}</p>
            </div>
        );
    }
}