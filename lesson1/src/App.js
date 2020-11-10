import React from 'react';
import Dropdown from "./Dropdown";
import Сounter from './Сounter';
import './App.css';

const dropOptions = [
  { option: "option1" },
  { option: "option2" },
  { option: "option3" }
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
        <Сounter count={this.state.count} />
        <Dropdown 
          holderClassName = 'dropdown-holder'
          className="dropdown"
          openerClassName="drop-opener"
          options={dropOptions}
        />
      </div>
    )
  }
}

export default App;
