import React from "react";
import List from "./List";
import "./style.css";

class Dropdown extends React.Component {

    static defaultProps = {
        options: []
    }

    constructor() {
        super();
        
        this.state = {
            activeItem: null,
            open: false,
		};
    }

    toggle = () => {
		this.setState(previous => ({
			open: !previous.open
		}));
    }
    
    
    switchItem = (value) => {
        this.setState({
            activeItem: value,
            open: false,
        })
    }

    render(){

        const {
            className,
            dropSwitcherClassName,
            dropMenuClassName,
            dropTitle,
            dropSwitcherTitle,
            options,
        } = this.props;

		const open = this.state.open;

        return (
            <div className={`${className} container`}>
                <h2>{dropTitle}</h2>
                <button className={`${dropSwitcherClassName} ${open ? "active" : ""}`} onClick={this.toggle}>
                    {this.state.activeItem ? this.state.activeItem : dropSwitcherTitle}
                </button>
                {
                    this.state.open ? <List options={options} className={dropMenuClassName} switchItem={this.switchItem} /> : null
                }
            </div>
        );
    }
}

export default Dropdown;