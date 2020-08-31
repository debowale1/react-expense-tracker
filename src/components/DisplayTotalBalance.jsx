import React, { Component } from "react";

class DisplayTotalBalance extends Component {
  state = {};
  render() {
    const { totalBalance } = this.props;
    return (
      <React.Fragment>
        <h4>Your Balance</h4>
        <h1 id="balance">{this.formatTotalBalance(totalBalance)}</h1>
      </React.Fragment>
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
