import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
<<<<<<< HEAD
import {  Button, Form, FormGroup, CardTitle, Input, Label, CardText, Col } from 'reactstrap';
=======
import { Container, Row, Col } from 'reactstrap';
>>>>>>> af3b272ff78ea364bb25edeeb26110b0e12e1086

class SavedtoGrade extends Component {

  render() {
    return (
<<<<<<< HEAD
          <>
        <Navbar />
        <div>
              <div className="toGrade">
                <h1>{this.props.title}</h1>
                <p><span>{this.props.description}</span></p>
                <p><span>{this.props.instructions}</span></p>
                </div>
                <Form>
               <FormGroup>
                <Label for="githubUrl">Github URL...</Label>
                <Input type="url" name="githubURL" id="githubURL" placeholder="Github URL..." />

                <p className="graderComment">Grader comment's</p>

                <FormGroup>
                  <Label for="exampleText">Text Area</Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button>Submit</Button>
                </FormGroup>

                </Form>
             </div>
              
          </>
        );
      };
      };

=======
      <>
      <Navbar />

      <Container fluid={true}>

       <Row className="divForGrading">
         <Col xs="3">
          <img className="imgInSavedForGrading" src="data:image/png;base64,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"></img>
          </Col>
          
          <Col xs="auto">
          <h2 className="gradePageh2"> Please fill out the form to submit</h2>
          </Col>

          </Row>

      </Container>
      </>
    );
  };
  };
>>>>>>> af3b272ff78ea364bb25edeeb26110b0e12e1086
  
  export default SavedtoGrade; 