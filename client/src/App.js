import React, { Component } from 'react';
import Toolbar from "./components/Toolbar"
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop"


class App extends Component {
  render() {
    
    return (
      <div style = {{ height: "100%"}}>
        <Toolbar/>
        <SideDrawer/>
        <BackDrop/>
        <main style = {{
          marginTop: "110px"
        }}> <p> This is the page content</p> </main>
        
        </div>
    );
  }
}
export default App;