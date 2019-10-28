import React, { Component } from 'react';
import { Router, Switch, Route } from './Routing.web'
import Toolbar from "./components/Toolbar"
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop"
import Wrapper from './components/Wrapper';
import ContactUs from './components/ContactUs';
import Table from "./components/Table";


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
        <Route path="/Home" render={(props) => <Wrapper {...props} property={"Home"} marginTop={defaultMarginTop} />} />

          <Route path="/retainingWalls" render={(props) => <Wrapper {...props} property={"Walls"} marginTop={defaultMarginTop} />} />

          <Route path="/patios" render={(props) => <Wrapper {...props} property={"Patios"} marginTop={defaultMarginTop} />} />

          <Route path="/pavers" render={(props) => <Wrapper {...props} property={"Pavers"} marginTop={defaultMarginTop} />} />

          <Route path="/decks" render={(props) => <Wrapper {...props} property={"Decks"} marginTop={defaultMarginTop} />} />

          <Route path="/cement" render={(props) => <Wrapper {...props} property={"Cement"} marginTop={defaultMarginTop} />} />

          <Route path="/seasonalflowerdecor" render={(props) => <Wrapper {...props} property={"Seasonal"} marginTop={defaultMarginTop} />} />

          <Route path="/sod" render={(props) => <Wrapper {...props} property={"Sod"} marginTop={defaultMarginTop} />} />

          <Route path="/contactUs" render={(props) => <Wrapper render={(props) => <ContactUs/>} />} />

          <Route path="/customers" render={(props) => <Wrapper render={(props) => <Table/>} />}  />
        </Switch>
      </Router>
    );
  }
}
export default App;