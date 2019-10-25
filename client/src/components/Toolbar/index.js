import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.css";
import {Link} from 'react-router-dom';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo"><a href="/home"> The logo </a> </div>
            <div className="spacer"> </div>
            <div className="toolbar-nav-items">
                {/* consider using router here */}
                <ul>
                    <li> <Link to={'contactUs'}> contact us </Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;