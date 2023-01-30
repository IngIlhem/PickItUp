import React from 'react';
import ItemDetails from './ItemDetails.jsx';

const ListItem = (props) => (
  <div>
    <p>{props.item.category}</p>
    <ItemDetails item={props.item} displayItem={props.displayItem}/>
    <img src={props.item.urlImage}/>
  </div>
)

export default ListItem;