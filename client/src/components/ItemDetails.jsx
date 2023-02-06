import React from 'react';
import ItemDetails from './ItemDetails.jsx';

const ItemDetails = (props) => {
  
  <div>
    <p>{props.item.category}</p>
    <div onClick={() => props.displayItem(props.item)}>
                {props.item.itemName}
    </div>
    <p>{props.item.description}</p>
    <img src={props.item.urlImage}/>
    
  </div>
}

export default ItemDetails;