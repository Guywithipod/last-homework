import React from "react";
import PropTypes from "prop-types"

const Card = ({property}) => {
    let picture;

   return(
        <div className="main container">
            <img src={picture} alt ="picture" />
            <div className = "details"/>
            <div className = "photo"/>
            </div>
   )
};

export default Card;