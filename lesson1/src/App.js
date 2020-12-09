import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import Header from "./components/Header";
import Authorization from "./components/Authorization";
import Profile from "./components/Profile";

import HomeContainer from "./containers/HomeContainer";

import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: null};
  }

  onSubmit = (data) => {
    this.setState({user: data});
    this.props.history.push('/profile');
  }

  render(){
    return (
      <div className="main-wrap">
        <Header className="header" user={this.state.user} />

        <Switch>
          <Route exact path="/" component={HomeContainer} />

          <Route path="/auth">
            <Authorization className="register-form" onSubmit={this.onSubmit} />
          </Route>

          <Route path="/profile" render={() => this.state.user ? <Profile className="profile-wrap" user={this.state.user} /> : <Redirect to="/auth" /> } />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
