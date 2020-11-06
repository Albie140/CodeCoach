import React from "react";
import { Button, Container } from 'reactstrap';
import './RegisterButtons.css';

function RegisterButtons() {

    return (
        <Container fluid={true}>
            <Button className="Btn learnBtn" color="primary">CLICK HERE TO BE A LEARNER</Button>
            {' '}
            <Button className="Btn gradeBtn" color="primary">CLICK HERE TO BE A GRADER</Button>
        </Container>
    )
}

export default RegisterButtons