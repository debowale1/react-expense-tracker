import React, { Component } from "react";
//declare context
const Context = React.createContext();
//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      return {
        ...state,
        allItems: state.allItems.filter((item) => item.id !== action.payload),
      };
    case "ADD_ITEM":
      return {
        ...state,
        allItems: [action.payload, ...state.allItems],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    allItems: [
      { id: 1, description: "Rent", amount: -1200, type: "exp" },
      { id: 2, description: "Cash", amount: 5200, type: "inc" },
      { id: 3, description: "Data Sub", amount: -200, type: "exp" },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
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
