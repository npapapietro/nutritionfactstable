import React from "react";
import "./NutritionBody.scss";

export default class NutritionBody extends React.Component{

    private get thead(){
        return(
        <thead>
            <tr>
              <th className="amnt-per-serving">
                Amount Per Serving
              </th>
            </tr>
          </thead>)
    }

    render(){
        return(
            <table className="nutrition-body">
                {this.thead}
            </table>
        )
    }
}