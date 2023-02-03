import React,{useState} from 'react';
import ShowDetails from './ShowDetails.jsx';

const ItemDetails = ({item, displayItem, currentItem, show}) => (

    <div>
    <p>{item.category}</p>
    <div onClick={() => displayItem(item)}>
                {item.itemName}
    </div>
    <p>{item.description}</p>
    <img src={item.urlImage} alt={item.itemName}/>
    {show && item===currentItem && <ShowDetails item={item}/>}
  </div>
)

export default ItemDetails;