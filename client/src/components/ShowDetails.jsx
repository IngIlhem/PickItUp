import React from "react";

const ShowDetails = ({ item }) => (

        <div>
           <div>Owner Name: </div>
           <span>{item.ownerName}</span>
           <div>Owner Tél: </div>
           <span>{item.ownerTel}</span>
           <div>Owner Adress: </div>
           <span>{item.ownerAdress}</span>
        </div>

);

export default ShowDetails;