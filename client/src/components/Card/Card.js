import React from "react";
import {imageMap} from '../../shared';
import "./card.css"


const Card = ({property}) => {

   return(
        <div className="main container">
            <img  class = "img" src={imageMap[property]} alt =""/>
            <div className = "details"/>
            {property}
            </div>
   )
};

export default Card;