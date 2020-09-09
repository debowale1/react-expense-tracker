import React, { Component } from "react";
import { Consumer } from "../context";

class DisplayTotalBalance extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { allItems } = value;
          const totalBalance = allItems.reduce(
            (acc, cur) => (acc += cur.amount),
            0
          );
          return (
            <React.Fragment>
              <h4>Your Balance</h4>
              <h1 id="balance">{this.formatTotalBalance(totalBalance)}</h1>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }

  formatTotalBalance(number) {
    if (number > 0) {
      return `$${number}`;
    } else if (number < 0) {
      return "-$" + Math.abs(number);
    } else {
      return "$0";
    }
  }
}

export default DisplayTotalBalance;
