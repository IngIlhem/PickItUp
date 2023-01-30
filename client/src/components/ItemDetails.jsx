import React from 'react';

const ItemDetails = (props) => (
    <div>
        <p>{props.item.category}</p>
        <div onClick={() => props.displayItem(props.item)}>
                {props.item.itemName}
        </div>
    </div>
)

export default ItemDetails;