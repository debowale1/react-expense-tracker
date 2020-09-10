import React, { Component } from "react";
import Item from "./Item";
import { Consumer } from "../context";

class List extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { allItems } = value;
          return (
            <ul id="list" className="list">
              {allItems.map((list) => (
                <Item key={list.id} item={list} />
              ))}
            </ul>
          );
        }}
      </Consumer>
    );
  }
}

export default List;
