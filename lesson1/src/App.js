// import React, {useRef, useState, lazy, Suspense} from "react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// import { useForm } from "react-hook-form";

import Header from "./components/Header";
import Authorization from "./components/Authorization";
import Profile from "./components/Profile";


import Dropdown from "./components/Dropdown";
import CounterContainer from "./components/CounterContainer";
import GalleryContainer from "./components/GalleryContainer";
import RangeSliderComponent from "./components/RangeSliderComponent";

import { URL, dropOptions, defoultCoords } from "./utils/constans";
import "./App.css";

const loggedIn = false;

class App extends React.Component {


  render(){
    return (
        <Router>
          <div className="main-wrap">
            <Header 
              className="header"
            />

            <Switch>
              <Route exact path="/">
                <RangeSliderComponent 
                  className="slider-wrap"
                  sliderWrapTitle="Lesson 4 : Range Slider"
                  sliderTitle="Range: "
                  defoultCoords={defoultCoords}
                />
                <GalleryContainer 
                  className="gallery-wrap"
                  galleryTitle="Lesson 3 : Gallery"
                  url={URL} 
                />
                <Dropdown 
                  className="drop-wrapper"
                  dropTitle="Lesson 2 : Dropdown"
                  dropMenuClassName="drop-menu"
                  dropSwitcherClassName="drop-switcher"
                  dropSwitcherTitle="Open drop menu"
                  options={dropOptions}
                />
                <CounterContainer
                  className="count-button-wrap"
                  buttonText="Click on button"
                  counterTitle="Lesson 1 : Counter"
                />
              </Route>

              <Route path="/auth">
                <div className="container">
                  <Authorization 
                    className="register-form"
                  />
                </div>
              </Route>

              <Route path="/profile">
                { !loggedIn ? <Redirect to="/auth" /> : <Profile /> }
              </Route>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App;
