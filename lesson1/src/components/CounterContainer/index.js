import React from "react";
import Counter from "./Counter";

class CounterContainer extends React.Component {
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

    const {
      className,
      buttonText,
      counterTitle
  } = this.props;

    return (
      <div className={`${className} container`}>
        <h2>{counterTitle}</h2>
        <button onClick={this.handleClick}>{buttonText}</button>
        <Counter count={this.state.count} />
      </div>
    )
  }
}

export default CounterContainer;
