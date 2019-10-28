import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";




const sideDrawer = props => {
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    }

  
    
    return (
        <nav className={drawerClasses}>
            <ul>
                <li> <Link to="/retainingWalls">Retaining Walls</Link> </li>
                <li> <a href="/patios">Patios</a> </li>
                <li>  <a href="/pavers">Pavers</a> </li>
                <li><a href="/decks">Decks</a> </li>
                <li> <a href="/cement">Cement</a> </li>
                <li> <a href="/seasonalFlowerDecor">Seasonal Flower Decor</a> </li>
                <li> <a href="/sod">Sod</a> </li>
                < li> <a href="/customers">customers</a>   {/*onClick={this.handleFormrequest}*/} </li> 
            </ul>
        </nav>
    )
};

export default sideDrawer;