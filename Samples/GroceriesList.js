import React from "react";

import Item from "./Item";

const GroceryList = props => {
  return (
    <div className="shopping-list">
      {props.groceries.map(item => {
        return <Item item={item} key={item.id} toggleItem={props.toggleItem} />;
      })}
    </div>
  );
};

export default GroceryList;
