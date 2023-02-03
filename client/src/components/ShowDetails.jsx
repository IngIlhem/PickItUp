import React from "react";

const ShowDetails = ({item}) =>(
    
        <div>
    
                <span>{item.ownerName}</span>
                <span>{item.ownerTel}</span>
                <span>{item.ownerAdress}</span>
                <span>{item.state}</span>
         
        </div>
        
    
);

 export default ShowDetails;