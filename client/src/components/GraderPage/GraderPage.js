import React, { useState, useEffect } from 'react';
import './Grader.css';
import GraderList from './components/graderList'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../utils/API";

function GraderPage(props) {
  const [ungradedAssignments, setUngradedAssignments] = useState();
  const [grade, setGrade] = useState("A");
  const [graderComments, setGraderComments] = useState("");

  useEffect(() => {
    API.getAllUngradedPosts("ungraded")
      .then(postData => {
        console.log(`@@@@@@@@@@`);
        console.log(postData.data);
        setUngradedAssignments(postData.data)
      })
      .catch(err => console.log(err));
  }, []);

  function submitGrade(event) {
    event.preventDefault();

    console.log("Submitted!");
    // console.log("ungradedAssignments");
    // console.log(ungradedAssignments);

    // console.log("title: " + ungradedAssignments[0].title);
    // console.log("user: " + ungradedAssignments[0].user);
    // console.log("grader: " + props.name);
    // console.log("userLink: " + ungradedAssignments[0].userLink);
    // console.log("userComments: " + ungradedAssignments[0].userComments);
    // console.log("graderComments: " + graderComments);
    // console.log("grade: " + grade);

    API.updatePost("5faaccde20ac380a90208486", {
      title: ungradedAssignments[0].title,
      user: ungradedAssignments[0].user,
      grader: props.userName,
      userLink: ungradedAssignments[0].userLink,
      userComments: ungradedAssignments[0].userComments,
      graderComments: graderComments,
      grade: grade
    })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div className="container-fluid"> <div className="graderPageBox">
        <h1 className="graderh1">
          👋 Hello there, {props.name}!
        </h1>
      </div>
        <div className="graderMiniBox">

          <img className="graderIMG" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZWFlMmY5O30uY2xzLTJ7ZmlsbDojZjk0MDYwO30uY2xzLTN7ZmlsbDojYzBjM2VlO30uY2xzLTR7ZmlsbDojOTZjY2VlO30uY2xzLTV7ZmlsbDojOTI5M2E1O30uY2xzLTZ7ZmlsbDojNmY3MTg4O30uY2xzLTd7ZmlsbDojZDYyNjU3O308L3N0eWxlPjwvZGVmcz48ZyBpZD0iRGF0YSI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjIwLjYzIDE4Ljg4IDIwLjYzIDQuOTQgOS42OCA0Ljk0IDMuMSA1LjE2IDMuMSAxOC44OCAyMC42MyAxOC44OCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTYuMTQsMy40NmE0LjI5LDQuMjksMCwxLDAsNC4yOSw0LjI4QTQuMjgsNC4yOCwwLDAsMCw2LjE0LDMuNDZoMG0wLDIuNjNoLjA1YTEuNjMsMS42MywwLDEsMS0uMDUsMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSIyMC42MyAxOC44OCAyMC42MyA0Ljk0IDE5LjQ1IDQuOTQgMTguNzQgNS4xNiAxOC43NCAxOC44OCAyMC42MyAxOC44OCIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTE0LjI3LDEzaDNhMS4xNCwxLjE0LDAsMSwxLDAsMi4yOGgtM2ExLjE0LDEuMTQsMCwxLDEsMC0yLjI4Ii8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNMS44NiwxNy4xdjIuMDlhMS4zNSwxLjM1LDAsMCwwLDEuMzYsMS4zNUgyMC41MWExLjM0LDEuMzQsMCwwLDAsMS4zNS0xLjM1VjE3LjFIMTUuMzF2MS4zMUg4LjQxVjE3LjFaIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNMTkuNzQsMTcuMXYyLjA5YTEuMzQsMS4zNCwwLDAsMS0xLjM1LDEuMzVoMi4xMmExLjM0LDEuMzQsMCwwLDAsMS4zNS0xLjM1VjE3LjFaIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNNi4xNCwzLjQ2YTQuNzQsNC43NCwwLDAsMC0uNzUuMDYsNC4yOCw0LjI4LDAsMCwxLDAsOC40NSw0LjM3LDQuMzcsMCwwLDAsLjcyLjA2LDQuMjksNC4yOSwwLDAsMCwwLTguNTdaIi8+PHBhdGggZD0iTTMuMjIsMjFIMjAuNTFhMS44NSwxLjg1LDAsMCwwLDEuODUtMS44NVYxNy4xYS41LjUsMCwwLDAtLjUtLjVoLS43NFY0Ljk0YS41LjUsMCwwLDAtLjUtLjVIOS42OGwtLjA3LDBBNC43Niw0Ljc2LDAsMCwwLDYuMTUsM2gwYTQuNzYsNC43NiwwLDAsMC0zLjU0LDhWMTYuNkgxLjg2YS41MS41MSwwLDAsMC0uNS41djIuMDlBMS44NSwxLjg1LDAsMCwwLDMuMjIsMjFabTE2LjktMTUuNlYxNi42SDE1LjMxYS41MS41MSwwLDAsMC0uNS41di44MUg4LjkxVjE3LjFhLjUuNSwwLDAsMC0uNS0uNUgzLjZWMTEuNzhhNC43NCw0Ljc0LDAsMCwwLDIuNTUuNzUsNC45MSw0LjkxLDAsMCwwLDEuNDktLjI2bDEuMjQsMi4xNWEuNTIuNTIsMCwwLDAsLjQzLjI1aDMuNGExLjY1LDEuNjUsMCwwLDAsMS41NiwxLjE0aDNhMS42NCwxLjY0LDAsMSwwLDAtMy4yOGgtM2ExLjY1LDEuNjUsMCwwLDAtMS41NiwxLjE0SDkuNmwtMS0xLjgyYTQuNzEsNC43MSwwLDAsMCwxLjc2LTYuNDFabS02LjQ5LDguNzJhLjYzLjYzLDAsMCwxLC42NC0uNjNoM2EuNjQuNjQsMCwxLDEsMCwxLjI4aC0zYS42NC42NCwwLDAsMS0uNjQtLjY0aDBaTTYuNjQsNEEzLjc3LDMuNzcsMCwwLDEsOS44OCw3LjI0SDguMjNBMi4xOCwyLjE4LDAsMCwwLDYuNjQsNS42NVptLS41LDIuNThoMGExLjE1LDEuMTUsMCwwLDEsMCwyLjMsMS4xNSwxLjE1LDAsMCwxLDAtMi4zaDBaTTIuMzYsNy43NEEzLjc3LDMuNzcsMCwwLDEsNS42NCw0VjUuNjVBMi4xNSwyLjE1LDAsMSwwLDguMjMsOC4yNEg5Ljg4YTMuNzgsMy43OCwwLDAsMS03LjUyLS41Wm0wLDkuODZINy45MXYuODFhLjUxLjUxLDAsMCwwLC41LjVoNi45YS41LjUsMCwwLDAsLjUtLjVWMTcuNmg1LjU1djEuNTlhLjg1Ljg1LDAsMCwxLS44NS44NUgzLjIyYS44NS44NSwwLDAsMS0uODYtLjg1WiIvPjxwYXRoIGQ9Ik0xNy4yNiwxMC4zMUgxMy41NGEuNS41LDAsMCwwLS41LjUuNS41LDAsMCwwLC41LjVoMy43MmEuNS41LDAsMCwwLC41LS41QS41MS41MSwwLDAsMCwxNy4yNiwxMC4zMVoiLz48cGF0aCBkPSJNMTMuNTQsOS43NmgyLjNhLjUuNSwwLDAsMCwuNS0uNS41LjUsMCwwLDAtLjUtLjVoLTIuM2EuNS41LDAsMCwwLS41LjVBLjUuNSwwLDAsMCwxMy41NCw5Ljc2WiIvPjxwYXRoIGQ9Ik0xMy41NCw4LjIxaDMuNzJhLjUuNSwwLDAsMCwwLTFIMTMuNTRhLjUuNSwwLDEsMCwwLDFaIi8+PC9nPjwvc3ZnPg=="></img>
          <br />
          <p>
            Thank you for helping others learn how to code! Below is a list of some code newbies who need your help! Please be as thorough and as informative & helpful with your comments as you can be!
        <br /><br />
          </p>


        </div>

        <GraderList />

      </div>

      <h1>Test!</h1>

      <Form>
        <FormGroup>
          <Label for="exampleSelect">Grade</Label>

          <Input type="select" name="select" id="exampleSelect" onChange={e => setGrade(e.target.value)}>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>F</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Place any comment for the user you would like to add: </Label>
          <Input type="textarea" name="commentforgrader" id="commentforgrader" onChange={e => setGraderComments(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <button onClick={submitGrade}> SUBMIT </button>
        </FormGroup>


      </Form>

    </div>
  );
}

export default GraderPage;