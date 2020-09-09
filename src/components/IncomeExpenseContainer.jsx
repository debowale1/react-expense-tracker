import React, { Component } from "react";
import { Consumer } from "../context";

class IncomeExpenseContainer extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { allItems } = value;
          //All income
          const allIncomes = allItems.filter((item) => item.type === "inc");
          const totalIncome = allIncomes.reduce(
            (acc, cur) => (acc += cur.amount),
            0
          );
          //All expense
          const allExpense = allItems.filter((item) => item.type === "exp");
          const totalExpense = allExpense.reduce(
            (acc, cur) => (acc += cur.amount),
            0
          );
          return (
            <div className="inc-exp-container">
              <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">
                  +${totalIncome}
                </p>
              </div>
              <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">
                  -${Math.abs(totalExpense)}
                </p>
              </div>
            </div>
          );
        }}
      </Consumer>
    );

    // return (
    //   <div className="inc-exp-container">
    //     <div>
    //       <h4>Income</h4>
    //       <p id="money-plus" className="money plus">
    //         +${this.props.totalIncome}
    //       </p>
    //     </div>
    //     <div>
    //       <h4>Expense</h4>
    //       <p id="money-minus" className="money minus">
    //         -${Math.abs(this.props.totalExpense)}
    //       </p>
    //     </div>
    //   </div>
    // );
  }
}

export default IncomeExpenseContainer;
