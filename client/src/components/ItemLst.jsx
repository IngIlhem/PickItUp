import React, { useState } from 'react';
import ShowDetails from './ShowDetails.jsx';

const ItemLst = ({ item, displayItem, currentItem, show }) => (

  <div className='card'>
    <img src={item.urlImage} alt={item.itemName} />
    
    <h3 onClick={() => displayItem(item)}>
      {item.itemName}
    </h3>
    <div>Category: </div>
    <article>{item.category}</article>
    <div>Description: </div>
    <p>{item.description}</p>
    <h4>{item.state}</h4>
    {show && item === currentItem && <ShowDetails item={item} />}
    <button sx={{mt: "auto"}}>Update</button>
    <button sx={{mt: "auto"}}>Delete</button>
  </div>
)

export default ItemLst;