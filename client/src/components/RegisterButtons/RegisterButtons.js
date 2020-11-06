import React from "react";
import { Button, Container } from 'reactstrap';
import './RegisterButtons.css';

function RegisterButtons() {

    return (
        <Container fluid={true}>
            <Button className="Btn learnBtn" color="warning">CLICK HERE TO SIGN IN</Button>
            {' '}
            <Button className="Btn gradeBtn" color="primary">CLICK HERE TO BE A MEMBER</Button>
        </Container>
    )
}

export default RegisterButtons