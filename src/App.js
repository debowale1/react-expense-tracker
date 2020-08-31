import React, { Component } from "react";
import IncomeExpenseContainer from "./components/IncomeExpenseContainer";
import List from "./components/List";
import AddTransaction from "./components/AddTransaction";
import DisplayTotalBalance from "./components/DisplayTotalBalance";
import "./App.css";

class App extends Component {
  state = {
    allItems: [
      { id: 1, description: "Rent", amount: -1200, type: "exp" },
      { id: 2, description: "Cash", amount: 5200, type: "inc" },
      { id: 3, description: "Repairs", amount: -200, type: "exp" },
    ],
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  };
  //delete Item
  handleDelete = (id) => {
    this.setState({
      allItems: this.state.allItems.filter((item) => item.id !== id),
    });
  };
  //handle add item
  handleClick = (description, amount) => {
    const id = Math.floor(Math.random() * 1000000);
    const type = +amount > 0 ? "inc" : "exp";
    const newItem = {
      id,
      description,
      amount: +amount,
      type,
    };

    this.setState({ allItems: [...this.state.allItems, newItem] });

    //clear input
  };
  render() {
    let { allItems, totalBalance, totalIncome, totalExpense } = this.state;
    totalBalance = allItems.reduce((acc, cur) => (acc += cur.amount), 0);
    //All income
    const allIncomes = allItems.filter((item) => item.type === "inc");
    totalIncome = allIncomes.reduce((acc, cur) => (acc += cur.amount), 0);
    //All expense
    const allExpense = allItems.filter((item) => item.type === "exp");
    totalExpense = allExpense.reduce((acc, cur) => (acc += cur.amount), 0);
    return (
      <div className="App">
        <h2>Expense Tracker</h2>
        <div className="container">
          <DisplayTotalBalance totalBalance={totalBalance} />
          <IncomeExpenseContainer
            totalIncome={totalIncome}
            totalExpense={totalExpense}
          />
          <h3>History</h3>
          <List lists={allItems} handleDelete={this.handleDelete} />
          <AddTransaction handleClick={this.handleClick} />
        </div>
      </div>
    );
  }

  // displayTotalBalance(number) {
  //   if (number > 0) {
  //     return `$${number}`;
  //   } else if (number < 0) {
  //     return "-$" + Math.abs(number);
  //   } else {
  //     return "$0";
  //   }
  // }
}

export default App;
