import React from "react";

import "./SideDrawer.css"

const sideDrawer = props => {
    let drawerClasses = "side-drawer";
    if(props.show){
    drawerClasses = "side-drawer open";
    
    }
   return(
        <nav className={drawerClasses}>
        <ul>
            <li> <a href="/">Retaining Walls</a> </li>
            <li> <a href="/">Patios</a> </li>
            <li>  <a href="/">Pavers</a> </li>
            <li><a href="/">Decks</a> </li>
            <li> <a href="/">Cement</a> </li>
            <li> <a href="/">Seasonal Flower Decor</a> </li>
            <li> <a href="/">Sod</a> </li>
            <li>  <a href="/">Contact Us</a> </li>
        </ul>
    </nav>
   )
};

export default sideDrawer;