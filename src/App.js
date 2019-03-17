import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Login from "./components/auth/Login";
import NotFound from "./components/not-found/NotFound";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", isLoggedIn: false };
  }
  checkLogin = (username, isLoggedIn) => {
    this.setState({
      username: username,
      isLoggedIn: isLoggedIn
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar isLoggedIn={this.state.isLoggedIn} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Login checkLogin={this.checkLogin} />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login checkLogin={this.checkLogin} />}
            />
            <Route
              exact
              path="/dashboard"
              render={() => <Dashboard username={this.state.username} />}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
