import React from "react";
import "./style.css";

class Profile extends React.Component {
    render(){

        const {
            className,
            user,
        } = this.props;

        console.log(user)

        return (
            <div className={className}>
                <h2>User Profile:</h2>

                <ul>
                    <li>User name: <b>{user.firstName}</b></li> 
                    <li>User email: <b>{user.email}</b></li> 
                </ul>
                
            </div>
        );
    }
}
  
export default Profile;