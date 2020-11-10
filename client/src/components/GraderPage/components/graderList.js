import React, { useState, useEffect } from "react";
import "../Grader.css";
import { ListGroup, ListGroupItem } from 'reactstrap';
import API from "../../../utils/API"

import GraderCard from './graderCard'

// NEED TO PASS PROPS OF LEARNER SUBMITTED WORK
// POSTED TO THE DATABASE

function GraderList() {
    const [codersToGrade, setCodersToGrade] = useState([])

    useEffect(() => {
        loadGrading();
    }, []);

    const loadGrading = () => {
        API.getAllUngradedPosts("ungraded")
            .then(postData => {
                console.log(postData.data)
                setCodersToGrade(postData.data)
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="graderListBox">

            <ListGroup className="graderListGroup">
                {codersToGrade.map((data) => {
                    return (
                    <ListGroupItem 
                    className="gradeListItem"
                    key={data._id}>
                        <GraderCard
                            key={data._id}
                            id={data._id}
                            grade={data.grade}
                            grader={data.grader}
                            graderComments={data.graderComments}
                            title={data.title}
                            user={data.user}
                            userComments={data.userComments}
                            userLink={data.userLink}
                        />
                    </ListGroupItem>
                    );
                })}

            </ListGroup>
        </div>
    );
}

export default GraderList;
