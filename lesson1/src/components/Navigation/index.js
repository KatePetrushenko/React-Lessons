import React from "react";
import { NavLink } from 'react-router-dom'
import "./style.css";

class Navigation extends React.Component {
    render(){

        const {
            className,
            user,
        } = this.props;

        return (
            <nav className={className}>
                <ul className="main-nav">
                    { user ? 
                        <li>
                            <NavLink to="/profile" activeStyle={{ color: "#61dafb" }}>Profile</NavLink>
                        </li>
                        : 
                        <li>
                            <NavLink to="/auth" activeStyle={{ color: "#61dafb"}} >login</NavLink>
                        </li>
                    }
                </ul>
            </nav>
        );
    }
}
  
export default Navigation;