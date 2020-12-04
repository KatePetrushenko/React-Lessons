import React from "react";
import Nav from "./Nav";
import logo from '../../logo.svg';
import "./style.css";

class Header extends React.Component {
    render(){

        const {
            className,
        } = this.props;

        return (
            <header className={className}>
                <div className="container">
                    <div className="logo"><img src={logo} className="App-logo" alt="logo" /></div>
                    <Nav 
                        className="nav"
                    />
                </div>
            </header>
        );
    }
}

export default Header;