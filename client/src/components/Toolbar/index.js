import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.css";


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-logo"><a href="/"> The logo </a> </div>
            <div className="spacer"> </div>
            <div className="toolbar-nav-items">
                {/* consider using router here */}
                <ul>
                    <li> <a href="/"> contact us </a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;