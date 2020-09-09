import React, { Component } from "react";
import InputGroup from "./InputGroup";

class AddTransaction extends Component {
  state = {
    description: "",
    amount: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { description, amount } = this.state;
    return (
      <React.Fragment>
        <h3>Add new transaction</h3>
        {/* <form > */}

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
          onClick={this.props.handleClick.bind(this, description, amount)}
        >
          Add transaction
        </button>
        {/* </form> */}
      </React.Fragment>
    );
  }
}

export default AddTransaction;
