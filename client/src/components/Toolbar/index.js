import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.css";


const toolbar = props =>(
   <header className="toolbar">
       <nav className="toolbar-nav">
           <div>
               <DrawerToggleButton />
           </div>
           <div className="toolbar-logo"><a href ="/"> the logo </a> </div>
           <div className = "spacer"> </div>
           <div className="toolbar-nav-items">
               {/* consider using router here */}
               <ul>
                   <li> <a href="/"> products </a></li>
                   <li> <a href="/"> users </a></li>

               </ul>
           </div>
       </nav>
   </header>
)

export default toolbar;