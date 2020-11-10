import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import {  Button, Form, FormGroup, CardTitle, Input, Label, CardText, Col } from 'reactstrap';

class SavedtoGrade extends Component {

  render() {
    return (
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

  
  export default SavedtoGrade; 