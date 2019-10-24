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

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }
  render() {
  
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}

        <main style={{
          marginTop: "110px"
        }}> <p> This is the page content</p> </main>

      </div>
    );
  }
}
export default App;