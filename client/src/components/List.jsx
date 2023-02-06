import { ListItem } from "@mui/material";
import React from "react";
import ItemLst from "./ItemLst.jsx";


const List = ({items, displayItem, currentItem, show}) => (
  <div>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <ItemLst item={item} displayItem={displayItem} currentItem={currentItem} show={show} />
        </li>
      ))}
    </ul>
  </div>
  
);

export default List;
