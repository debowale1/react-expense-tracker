import React, { Component } from "react";
//declare context
const Context = React.createContext();

export class Provider extends Component {
  state = {
    allItems: [
      { id: 1, description: "Rent", amount: -1200, type: "exp" },
      { id: 2, description: "Cash", amount: 5200, type: "inc" },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
