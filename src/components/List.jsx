import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    const { lists } = this.props;
    return (
      <ul id="list" className="list">
        {lists.map((list) => (
          <Item
            key={list.id}
            item={list}
            handleDelete={this.props.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default List;
