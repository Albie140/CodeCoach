import React from "react";
import "../Grader.css";
import { ListGroup, ListGroupItem } from 'reactstrap';

import GraderCard from './graderCard'

// NEED TO PASS PROPS OF LEARNER SUBMITTED WORK
// POSTED TO THE DATABASE

function GraderList() {
    return (
        <div className="graderListBox">
            {/* <h2 className="gListh1">List of Codes to Review</h2> */}
            <ListGroup className="graderListGroup">
                {/* THIS NEEDS TO BE MAP OF THE THINGS TO GRADE THIS IS JUST A MOCK OF A LOOP */}
                <ListGroupItem className="gradeListItem">
                    <GraderCard />
                </ListGroupItem>

                <ListGroupItem className="gradeListItem">
                    <GraderCard />
                </ListGroupItem>

            </ListGroup>
        </div>
    );
}

export default GraderList;
