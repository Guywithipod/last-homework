import React, { Component } from 'react';
import { Router, Switch, Route } from './Routing.web'
import Toolbar from "./components/Toolbar"
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop"
import Card from "./components/Card/Card"

function Retain() {
  return (
    <main style={{
      marginTop: "110px"
    }}>
      <p>
        <Card property={"retain"} />
        This is the page content
      </p>
    </main>
  )
}

function Patio() {
  return (
    <main style={{
      marginTop: "110px"
    }}>
      <p>
        <Card property={"patio"} />
        This is the page content
      </p>
    </main>
  )
}

function Pavers() {
  return (
    <main style={{
      marginTop: "110px"
    }}>
      <p>
        <Card property={"pavers"} />
        This is the page content
      </p>
    </main>
  )
}

function Decks() {
  return (
    <main style={{
      marginTop: "110px"
    }}>
      <p>
        <Card property={"deck"} />
        This is the page content
      </p>
    </main>
  )
}

function Cement() {
  return (
    <main style={{
      marginTop: "110px"
    }}>
      <p>
        <Card property={"cement"} />
        This is the page content
      </p>
    </main>
  )
}

function Seasonal() {
  return (
    <main style={{
      marginTop: "110px"
    }}>
      <p>
        <Card property={"seasonal"} />
        This is the page content
      </p>
    </main>
  )
}

function Sod() {
  return (
    <main style={{
      marginTop: "110px"
    }}>
      <p>
        <Card property={"sod"} />
        This is the page content
      </p>
    </main>
  )
}

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
    let property;
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
          <Route path="/retainingWalls" render={(props) => <Retain {...props} />} />
          <Route path="/patios" render={(props) => <Patio {...props} />} />
          <Route path="/pavers" render={(props) => <Pavers {...props} />} />
          <Route path="/decks" render={(props) => <Decks {...props} />} />
          <Route path="/cement" render={(props) => <Cement {...props} />} />
          <Route path="/seasonalflowerdecor" render={(props) => <Seasonal {...props} />} />
          <Route path="/sod" render={(props) => <Sod {...props} />} />
        </Switch>
      </Router>
    );
  }
}
export default App;