import React, { Component } from "react";
import { Consumer } from "../context";

class Items extends Component {
  formatMoney(number) {
    return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  handleDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  render() {
    const { amount, description, id, type } = this.props.item;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
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
                onClick={this.handleDeleteClick.bind(this, id, dispatch)}
              >
                x
              </button>
            </li>
          );
        }}
      </Consumer>
    );
  }
}

export default Items;
