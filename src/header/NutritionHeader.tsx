import React from "react";
import "./NutritionHeader.scss";
import { IServingSize } from "../utils/ServingSize";

export interface INutritionHeader {
    servingSize: IServingSize,

}

export default class NutritionHeader extends React.Component<INutritionHeader, {}> {
    render() {
        const {
            servingSize
        } = this.props;
        return (
            <div className="nutrition-header">
                <h1>
                    Nutrition Facts
                </h1>
                <p>{servingSize.toString()}</p>
                <p>{`Serving Per Container ${servingSize.servingNumber}`}</p>
            </div>
        );
    }
}