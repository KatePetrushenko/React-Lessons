import React from "react";

import Dropdown from "../components/Dropdown";
import CounterContainer from "../components/CounterContainer";
import GalleryContainer from "../components/GalleryContainer";
import RangeSliderComponent from "../components/RangeSliderComponent";

import { URL, dropOptions, defoultCoords } from "../utils/constans";

class HomeContainer extends React.Component {
  render(){
    return (
        <div>
            <div id="lesson4">
                <RangeSliderComponent 
                className="slider-wrap"
                sliderWrapTitle="Lesson 4 : Range Slider"
                sliderTitle="Range: "
                defoultCoords={defoultCoords}
                />
            </div>
            <div id="lesson3">
                <GalleryContainer 
                className="gallery-wrap"
                galleryTitle="Lesson 3 : Gallery"
                url={URL} 
                />
            </div>
            <div id="lesson2">
                <Dropdown 
                className="drop-wrapper"
                dropTitle="Lesson 2 : Dropdown"
                dropMenuClassName="drop-menu"
                dropSwitcherClassName="drop-switcher"
                dropSwitcherTitle="Open drop menu"
                options={dropOptions}
                />
            </div>
            <div id="lesson1">
                <CounterContainer
                className="count-button-wrap"
                buttonText="Click on button"
                counterTitle="Lesson 1 : Counter"
                />
            </div>
        </div>
    )
  }
}

export default HomeContainer;
