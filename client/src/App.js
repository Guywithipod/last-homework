import React, { Component } from 'react';
import { Router, Switch, Route } from './Routing.web'
import Toolbar from "./components/Toolbar"
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop"
import Wrapper from './components/Wrapper';
import ContactUs from './components/ContactUs';

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
    this.setState({ sideDrawerOpen: false })
  }
  render() {
    const defaultMarginTop = '110px'
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />
    }
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}


        </div>
        <Switch>
          <Route path="/retainingWalls" render={(props) => <Wrapper {...props} property={"Walls"} marginTop={defaultMarginTop} />} />
          <Route path="/patios" render={(props) => <Wrapper {...props} property={"Patios"} marginTop={defaultMarginTop} />} />
          <Route path="/pavers" render={(props) => <Wrapper {...props} property={"Pavers"} marginTop={defaultMarginTop} />} />
          <Route path="/decks" render={(props) => <Wrapper {...props} property={"Decks"} marginTop={defaultMarginTop} />} />
          <Route path="/cement" render={(props) => <Wrapper {...props} property={"Cement"} marginTop={defaultMarginTop} />} />
          <Route path="/seasonalflowerdecor" render={(props) => <Wrapper {...props} property={"Seasonal"} marginTop={defaultMarginTop} />} />
          <Route path="/sod" render={(props) => <Wrapper {...props} property={"Sod"} marginTop={defaultMarginTop} />} />
          <Route path="/contactus" render={(props) => <Wrapper {...props} property={"ContactUs"} marginTop={defaultMarginTop} render={(props) => <ContactUs {...props} />} />} />
        </Switch>
      </Router>
    );
  }
}
export default App;