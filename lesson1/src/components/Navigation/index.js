import React from "react";
import "./style.css";

class Navigation extends React.Component {
    render(){

        const {
            className,
        } = this.props;

        return (
            <nav className={className}>
                <ul className="main-nav">
                    <li><a href="#">login</a></li>
                </ul>
            </nav>
        );
    }
}
  
export default Navigation;