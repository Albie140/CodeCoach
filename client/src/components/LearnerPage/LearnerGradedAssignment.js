import React from "react";
import "./Learner.css"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

<<<<<<< HEAD:client/src/components/LearnerPage/LearnerAssignment.js
function LearnerAssignment() {
  state = {}
  render() {
=======
function LearnerGradedAssignment() {
>>>>>>> 951251a47e3d320db4d6cf5154de137ce33c068d:client/src/components/LearnerPage/LearnerGradedAssignment.js
    return (
      <div className="learnerAssignBox">

        <h1>{this.props.title}</h1>
        <p><span>{this.props.description}</span></p>
        <p><span>{this.props.instructions}</span></p>
        <Form>
          <FormGroup>
          <Label for="githubUrl">Github URL...</Label>
          <Input type="url" name="githubURL" id="githubURL" placeholder="Github URL..."/>
        </FormGroup>
        <p className="assignComment">Any questions or comments you'd like to make to your grader?</p>
        <Button class="submit">Submit</Button>{'Submit'}
      </Form>
    </div >
  );
  }
<<<<<<< HEAD:client/src/components/LearnerPage/LearnerAssignment.js

  export default LearnerAssignment;
=======
  
  export default LearnerGradedAssignment;
>>>>>>> 951251a47e3d320db4d6cf5154de137ce33c068d:client/src/components/LearnerPage/LearnerGradedAssignment.js
