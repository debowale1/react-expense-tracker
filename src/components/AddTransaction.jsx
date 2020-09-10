import React, { Component } from "react";
import { Consumer } from "../context";

class AddTransaction extends Component {
  state = {
    description: "",
    amount: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddItem = (description, amount, dispatch) => {
    const id = Math.floor(Math.random() * 1000000);
    const type = +amount > 0 ? "inc" : "exp";
    const newItem = {
      id,
      description,
      amount: +amount,
      type,
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
    //clear field

    this.setState({
      description: "",
      amount: 0,
    });
  };

  render() {
    const { description, amount } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <h3>Add new transaction</h3>

              <div className="form-control">
                <label htmlFor="description">Description</label>
                <input
                  name="description"
                  type="text"
                  placeholder="Enter text..."
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="amount">
                  Amount <br />
                  (negative - expense, positive - income)
                </label>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter amount..."
                  value={amount}
                  onChange={this.handleChange}
                />
              </div>
              <button
                className="btn"
                onClick={this.handleAddItem.bind(
                  this,
                  description,
                  amount,
                  dispatch
                )}
              >
                Add transaction
              </button>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default AddTransaction;
