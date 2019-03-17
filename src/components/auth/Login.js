import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: true,
      passwordValid: true,
      formValid: false,
      errmsg: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    const { name, value } = e.target;
    this.validateField(name, value);
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.formValid) {
      let email = this.state.email;
      if (
        email === "clarion@clarion.com" &&
        this.state.password === "Clarion123"
      ) {
        var username = email.split("@");
        this.props.checkLogin(username[0], true);
        this.setState({ redirectToDashboard: true });
      } else {
        this.setState({ errmsg: "UserId or password is incorrect" });
      }
    }
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case "email":
        var emailPattern = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValid = emailPattern.test(value);
        fieldValidationErrors.email = emailValid
          ? ""
          : " Invalid email address";
        break;
      case "password":
        var passwordPattern = new RegExp(/[A-Z]/);
        passwordValid = passwordPattern.test(value);
        fieldValidationErrors.password = passwordValid
          ? ""
          : " Password should contain one uppercase letter";
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid,
      formValid: emailValid && passwordValid,
      errmsg: ""
    });
  }

  render() {
    const { redirectToDashboard } = this.state;

    if (redirectToDashboard) {
      return <Redirect to={"/dashboard"} />;
    }
    return (
      <Fragment>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                <p className="lead text-center">Sign in to your account</p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className={`form-control ${
                        this.state.emailValid ? "" : "is-invalid"
                      }`}
                      placeholder="Email Address"
                      name="email"
                      onChange={this.onChange}
                    />
                    {this.state.emailValid ? (
                      ""
                    ) : (
                      <div className="errorMsg">
                        {this.state.formErrors.email}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={`form-control ${
                        this.state.passwordValid ? (
                          <div className="errorMsg">
                            {this.state.formErrors.password}
                          </div>
                        ) : (
                          "is-invalid"
                        )
                      }`}
                      placeholder="Password"
                      name="password"
                      onChange={this.onChange}
                    />
                    {this.state.passwordValid ? (
                      ""
                    ) : (
                      <div className="errorMsg">
                        {this.state.formErrors.password}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <div className="errorMsg">{this.state.errmsg}</div>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
