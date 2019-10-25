import React from "react";
import {imageMap} from '../../shared';


const Card = ({property}) => {

   return(
        <div className="main container">
            <img src={imageMap[property]} alt =""/>
            <div className = "details"/>
            {property}
            </div>
   )
};

export default Card;