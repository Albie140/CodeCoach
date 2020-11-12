import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Label, Input, Button } from 'reactstrap';
import './Register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      role: "Learner",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      role: this.state.role
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="signUpBox mx-auto">
        <div className="row">
          <div className="col s8 offset-s2">
            <p>
            <Link to="/" className="regiBackHomeLink">Back to home
            </Link></p>
            <div className="col s12 regiAcct">
              <h4>
                Register for an account 
              </h4>
              <p className="registerptag"> Already have an account? <Link to="/login" className="regiLogInLink">Log in</Link>
              </p>
            </div>
          
              <form noValidate onSubmit={this.onSubmit}>

                <div className="input-field col s12">
                  <Input
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                    type="text"
                    className={classnames("", {
                      invalid: errors.name
                    })}
                  />
                  <label htmlFor="name">Full Name</label>
                  <span className="red-text"> {errors.name}</span>
                </div>

                <div className="input-field col s12">
                  <Input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email
                    })}
                  />
                  <label htmlFor="email"> Email</label>
                  <span className="red-text"> {errors.email}</span>
                </div>

                <div className="input-field col s12">
                  <Input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password
                    })}
                  />
                  <label htmlFor="password"> Password</label>
                  <span className="red-text"> {errors.password}</span>
                </div>

                <div className="input-field col s12">
                  <Input
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password2
                    })}
                  />
                  <label htmlFor="password2"> Confirm Password</label>
                  <span className="red-text">{errors.password2}</span>
                </div>
                    
                <div className="input-field col s12" style={{marginTop: "10px"}}>
                  <Label>Enter a Role</Label>
                  <Input 
                    type="select" 
                    name="role" 
                    id="role" 
                    value={this.state.role} 
                    onChange={this.onChange} 
                    error="">
                    <option>Learner</option>
                    <option>Teacher</option>
                  </Input>
                  </div>
              
                <div className="col s12 registerButton">
                  <Button
                    type="submit"
                    className="regiSignUpBtn">
                    Sign up
                </Button>
                </div>

              </form>
         

          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));