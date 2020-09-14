import React from "react";
import ISingleNutrient, { MajorNutritionItems } from "./NutritionItem";

export interface INutritionItems {
    items: ISingleNutrient[],
    calories: number,
    caloriesFromFat?: number
}

export default class NutritionMajor extends React.Component<INutritionItems> {

    private get thead() {
        return (
            <thead>
                <tr>
                    <th className="small-row" colSpan={3}>
                        Amount Per Serving
              </th>
                </tr>
            </thead>)
    }

    private get calories() {
        return (<tr>
            <th className="small-info" colSpan={2}>
                <b>Calories</b> {this.props.calories}
            </th>
            {
                this.props.caloriesFromFat ? <td>
                    Calories from Fat {this.props.caloriesFromFat}
                </td> : <td />
            }
        </tr>)
    }
    render() {
        return (
            <table className="NutritionFacts__table">
                {this.thead}
                <tbody>
                    {this.calories}
                    <tr className="thick-row">
                        <td className="small-info" colSpan={3}>
                            <b>% Daily Value*</b>
                        </td>
                    </tr>
                    {MajorNutritionItems(this.props.items)}
                </tbody>
            </table>
        )
    }
}