import React, { Component } from 'react';
import Toolbar from "./components/Toolbar"
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop"



class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
      
    });
  };

  render() {
    let sideDrawer;
    let backDrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <BackDrop />
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />

        {sideDrawer}
        {backDrop}
       
        <main style={{
          marginTop: "110px"
        }}> <p> This is the page content</p> </main>

      </div>
    );
  }
}
export default App;