import React from "react";

class Nav extends React.Component {
    render(){

        const {
            className,
        } = this.props;

        return (
            <nav className={`${className}`}>
                <ul className="main-nav">
                    <li><a href="#">login</a></li>
                </ul>
            </nav>
        );
    }
}
  
export default Nav;