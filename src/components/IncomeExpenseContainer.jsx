import React from "react";

const IncomeExpenseContainer = (props) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${props.totalIncome}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(props.totalExpense)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenseContainer;
