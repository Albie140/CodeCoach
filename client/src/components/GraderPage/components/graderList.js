import React, { useState, useEffect } from "react";
import "../Grader.css";
import { ListGroup, ListGroupItem } from 'reactstrap';
import API from "../../../utils/API"
import GraderCard from './graderCard'

function GraderList(props) {
    const [codersToGrade, setCodersToGrade] = useState([])
    const [deletedId, setDeletedId] = useState("")

    useEffect(() => {
        loadGrading();
    }, []);

    const loadGrading = () => {
        API.getAllUngradedPosts("ungraded")
            .then(postData => {
                console.log(postData.data)
                let updatedData = postData.data;
                updatedData = updatedData.filter(element => 
                    element.id !== deletedId
                );
                setCodersToGrade(updatedData)
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
                            currentLoggedInGraderUserName={props.userName}
                            loadGrading={loadGrading}
                            setDeletedId={setDeletedId}
                        />
                    </ListGroupItem>
                    );
                })}

            </ListGroup>
        </div>
    );
}

export default GraderList;
