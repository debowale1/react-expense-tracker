import React, { Component } from "react";
import IncomeExpenseContainer from "./components/IncomeExpenseContainer";
import List from "./components/List";
import AddTransaction from "./components/AddTransaction";
import DisplayTotalBalance from "./components/DisplayTotalBalance";
import Branding from "./components/Branding";
import { Provider } from "./context";
import "./App.css";

class App extends Component {
  //handle add item
  // handleClick = (description, amount) => {
  //   const id = Math.floor(Math.random() * 1000000);
  //   const type = +amount > 0 ? "inc" : "exp";
  //   const newItem = {
  //     id,
  //     description,
  //     amount: +amount,
  //     type,
  //   };

  //   this.setState({ allItems: [...this.state.allItems, newItem] });
  // };
  render() {
    return (
      <Provider>
        <div className="App">
          <Branding />
          <div className="container">
            <DisplayTotalBalance />
            <IncomeExpenseContainer />
            <h3>History</h3>
            <List />
            <AddTransaction />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
