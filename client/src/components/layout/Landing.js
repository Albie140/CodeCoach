import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from 'reactstrap';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
              <h1>Code Coach!</h1> 
              <h4>learners and coders alike. Come see it for yourself!
            </h4>
            <br />
            <div className="col s6">
            <Link to="/register">
              <Button className="Btn" color="warning">
                  Register
             </Button></Link>
            </div>
            <div className="col s6">
                <Link to="/login">
                  <Button className="Btn" color="primary">
                  Log In</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;