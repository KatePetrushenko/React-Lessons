import React from "react";
import Dropdown from "./Dropdown";
import Counter from "./Counter";
import GalleryContainer from "./GalleryContainer";
import { URL, dropOptions } from "./constans";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  handleClick = () => {
    this.setState( curState => {
      return {
        count : curState.count + 1
      }
    })
  }

  render(){
    return (
      <div className="main-wrap">
        <div className="count-button-wrap container">
          <button onClick={this.handleClick}>Test Button</button>
          <Counter count={this.state.count} />
        </div>
        <div className="dropdown-wrap container">
          <Dropdown 
            className="drop-wrapper"
            dropMenuClassName="drop-menu"
            dropSwitcherClassName="drop-switcher"
            dropSwitcherTitle="Open drop menu"
            options={dropOptions}
          />
        </div>
        <div className="gallery-wrap container">
          <GalleryContainer url={URL} />
        </div>
      </div>
    )
  }
}

export default App;
