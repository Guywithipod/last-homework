import React from "react"
import "./drawerTogglebtn.css";

const drawerToggleButton = props => (

    <button className="toggle-button" onClick={props.click}> 
        <span className = "toggle-button-line"/>
        <span className = "toggle-button-line"/>
        <span className = "toggle-button-line"/>
    </button>
);

export default drawerToggleButton;