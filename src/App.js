import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Posts from "./components/posts.component";
import Signup from "./components/signup.component";
import MakePost from "./components/make-post.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined
    };
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark active">
          <Link to={"/home"} className="navbar-brand">
            EduCrib
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
          </div>

          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Sign Up
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/posts"} className="nav-link">
                Posts
              </Link>
            </li>
          </div>
        </nav>
        

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Posts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/posts" component={MakePost} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
