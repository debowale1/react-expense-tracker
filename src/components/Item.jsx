import React, { Component } from "react";

class Items extends Component {
  // state = {};

  formatMoney(number) {
    return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  render() {
    const { amount, description, id, type } = this.props.item;
    return (
      <li className={type === "inc" ? "plus" : "minus"} id="item-0">
        {description}{" "}
        <span>
          {amount > 0
            ? this.formatMoney(amount)
            : this.formatMoney(Math.abs(amount))}
        </span>
        <button
          className="delete-btn"
          onClick={this.props.handleDelete.bind(this, id)}
        >
          x
        </button>
      </li>
    );
  }
}

export default Items;
