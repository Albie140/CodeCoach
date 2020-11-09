import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Jumbotron } from 'reactstrap';
import './Landing.css';


class Landing extends Component {
  render() {
    return (
      <Container fluid={true}>

        <Jumbotron className="jumboBanner">
          <h1>
            <i className="fas fa-laptop-code"></i> CodeCoach!
          </h1>
          <h5 className="h5style">
            A place for learners and coders alike. 
            <br />
            Come see it for yourself!
          </h5>
          <hr />
        </Jumbotron>

        <Container className="toRouteBtns">
          <Link to="/register">
            <Button className="registerBtn">
              Register
             </Button></Link>
       
          <Link to="/login">
            <Button className="logInBtn">
              Log In
            </Button></Link>
        </Container>

      </Container>
    );
  }
}

export default Landing;