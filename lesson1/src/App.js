import React, {useState} from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { history } from './history.js';
import Header from "./components/Header";
import Authorization from "./components/Authorization";
import Profile from "./components/Profile";

import HomeContainer from "./containers/HomeContainer";

import "./App.css";

function App() {

  const [user, setUser] = useState();

  const onSubmit = (data) => {
    setUser(data);
    history.push("/profile");
  }

  return (
      <Router history={history}>
        <div className="main-wrap">
          <Header className="header" />

          <Switch>
            <Route exact path="/" component={HomeContainer} />

            <Route path="/auth">
              <Authorization 
                className="register-form"
                onSubmit={onSubmit}
              />
            </Route>

            <Route exact path="/profile">
              { user ? <Profile /> : <Redirect to="/auth" /> }
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App;
