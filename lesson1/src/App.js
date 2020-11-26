import React from "react";
import Dropdown from "./components/Dropdown";
import CounterContainer from "./components/CounterContainer";
import GalleryContainer from "./components/GalleryContainer";
import { URL, dropOptions } from "./utils/constans";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="main-wrap">
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
          galleryTitle="Lesson 2 : Dropdown"
          url={URL} 
        />
      </div>
    )
  }
}

export default App;
