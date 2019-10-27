import React from "react";
import {imageMap} from '../../shared';
import "./card.css"
import {detailsMap} from '../../shared';
import {moreDetailsMap} from '../../shared';


const Card = ({property}) => {

   return(
        <div>
           <div className = "main-container">
            {imageMap[property] && <img  class = "img" src={imageMap[property]} alt =""/>}
            <div className = "details"/>
            {detailsMap[property]}
            <br/>
            <br/>
             {moreDetailsMap[property]}
            </div>
            
            </div>
   )
};

export default Card;