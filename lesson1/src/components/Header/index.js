import React from "react";
import { Link } from 'react-router-dom'
import Navigation from "../Navigation";
import logo from '../../logo.svg';
import "./style.css";

class Header extends React.Component {
    render(){

        const {
            className,
            user,
        } = this.props;

        return (
            <header className={className}>
                <div className="container">
                    <div className="logo">
                    <Link to={{pathname: "/"}}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    </div>
                    <Navigation  
                        user={user}
                        className="nav"
                    />
                </div>
            </header>
        );
    }
}

export default Header;