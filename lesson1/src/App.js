import React from "react";
import Dropdown from "./components/Dropdown";
import CounterContainer from "./components/CounterContainer";
import GalleryContainer from "./components/GalleryContainer";
import RangeSliderComponent from "./components/RangeSliderComponent";
import { URL, dropOptions, defoultCoords } from "./utils/constans";
import "./App.css";

class App extends React.Component {

  render(){
    return (
      <div className="main-wrap">
        <RangeSliderComponent 
          className="slider-wrap"
          sliderWrapTitle="Lesson 4 : Slider"
          sliderTitle="Range: "
          defoultCoords={defoultCoords}
        />
        <CounterContainer
          className="count-button-wrap"
          buttonText="Click on button"
          counterTitle="Lesson 1 :Counter"
        />
        <Dropdown 
          className="drop-wrapper"
          dropTitle="Lesson 2 : Dropdown"
          dropMenuClassName="drop-menu"
          dropSwitcherClassName="drop-switcher"
          dropSwitcherTitle="Open drop menu"
          options={dropOptions}
        />
        <GalleryContainer 
          className="gallery-wrap"
          galleryTitle="Lesson 3 : Gallery"
          url={URL} 
        />
      </div>
    )
  }
}

export default App;
