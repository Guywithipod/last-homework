import React from "react";


const card = ({property}) => {
    let picture;

   return(
        <div className="main container">
            <img src={picture} alt =""/>
            <div className = "details"/>
            {property}
            </div>
   )
};

export default card;