import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Login.css';


function Login() {
	return (
	<div className="loginBox">
		<h2>Coding Coach</h2>
		<hr />
	<Form>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" name="email" id="email" placeholder="test@test.com" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" name="password" id="password" placeholder="password" />
      </FormGroup>
      <FormGroup>
        <Label>Select your role</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Coder</option>
          <option>Grader</option>
        </Input>
      </FormGroup>
      <Button>Log In!</Button>
	  </Form>
	  </div>
	);
}

export default Login;