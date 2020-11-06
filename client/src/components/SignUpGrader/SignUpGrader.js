import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './SignUpGrader.css';


function SignUpGrader() {
	return (
	<div className="signUpGraderBox">
	<Form>
	<FormGroup>
    <h3>Sign up to become a grader!</h3>
        <Label>Name</Label>
        <Input type="name" name="name" id="name" placeholder="Mary Jones" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" name="email" id="email" placeholder="test@test.com" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" name="password" id="password" placeholder="password" />
      </FormGroup>
      <FormGroup>
        <Label>How many years have you been coding?</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>0-2 years</option> 
          <option>2-4 years</option>
          <option>4-6 years</option> 
          <option>6-8 years</option>  
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Your Expertise</Label>
        <Input type="text" name="expertise" id="expertise" placeholder="HTML, CSS, Javascript, C++, C#, etc" />
      </FormGroup>
      <Button className="submit">Sign Up!</Button>
	  </Form>
	  </div>
	);
}

export default SignUpGrader;