import React from "react";
import "./style.css";

class Profile extends React.Component {
    render(){

        const {
            className,
        } = this.props;

        return (
            <div className={className}>
                Profile
            </div>
        );
    }
}
  
export default Profile;