import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  handleOnClick() {
    this.props.isLoggedIn = false;
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {this.props.isLoggedIn ? (
                  <Link
                    className="nav-link"
                    onClick={this.handleOnClick}
                    to="/login"
                  >
                    Logout
                  </Link>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
