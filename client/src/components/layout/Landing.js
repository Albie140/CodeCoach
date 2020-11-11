import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron } from 'reactstrap';
import './Landing.css';


class Landing extends Component {
  render() {
    return (
      <Container fluid={true}>

        <Jumbotron className="jumboBanner">
          <h1 className="h1jumboBanner">
            <i className="fas fa-laptop-code"></i> Code Coach
          </h1>
          <hr />
          <h5 className="h5style">
            A place for learners and coders alike. 
            Come see it for yourself!
          </h5>
         
        </Jumbotron>

        <div className="toRouteBtns">

          <Link to="/register">
            <button className="registerBtn">
              Register
             </button></Link>
       
          <Link to="/login">
            <button className="logInBtn">
              Log In
            </button></Link>

        </div>

      </Container>
    );
  }
}

export default Landing;