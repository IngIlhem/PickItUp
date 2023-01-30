import React from "react";

const ShowDetails = ({show, item}) => { 
    return (
        <div>
           {
            show && 
            <div>
                <span>{item.category}</span>
                <span>{item.itemName}</span>
                <span>{item.urlImage}</span>
                <span>{item.description}</span>
                <span>{item.ownerName}</span>
                <span>{item.ownerTel}</span>
                <span>{item.ownerAdresse}</span>
                <span>{item.state}</span>
            </div>
           }
        </div>
    )
 };

 export default ShowDetails;