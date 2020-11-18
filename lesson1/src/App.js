import React from "react";
import Dropdown from "./Dropdown";
import Counter from "./Counter";
import GalleryContainer from "./GalleryContainer";
import "./App.css";

const dropOptions = [
  { option: "option 1" },
  { option: "option 2" },
  { option: "option 3" }
];

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
      <div className="App">
        <button onClick={this.handleClick}>Test Button</button>
        <Counter count={this.state.count} />
        <Dropdown 
          className="drop-wrapper"
          dropMenuClassName="drop-menu"
          dropSwitcherClassName="drop-switcher"
          dropSwitcherTitle="Open drop menu"
          options={dropOptions}
        />

        <GalleryContainer />
      </div>
    )
  }
}

export default App;
