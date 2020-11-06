import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Jumbotron } from 'reactstrap';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <Container fluid={true}>

        <Jumbotron className="jumboBanner">
          <h1>Code Coach!</h1>
          <h4>learners and coders alike. Come see it for yourself!</h4>
          <hr />
        </Jumbotron>

        <Container className="toRouteBtns mx-auto">
          <Link to="/register">
            <Button className="registerBtn" color="warning">
              Register
             </Button></Link>
          {' '}
          <Link to="/login">
            <Button className="logInBtn" color="primary">
              Log In</Button></Link>
        </Container>

      </Container>
    );
  }
}

export default Landing;