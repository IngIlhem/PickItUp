import { ListItem } from "@mui/material";
import React from "react";
import ItemDetails from "./ItemDetails.jsx";

const List = ({items, displayItem, currentItem, show}) => (
  <div>
    <h4>Available Items</h4>
    There are {items.length} items.
    {items.map((item, index) => (
      <div key={index}>
        <ItemDetails   item={item} displayItem={displayItem} currentItem={currentItem} show={show}/>
      </div>
    ))}
  </div>
);

export default List;
