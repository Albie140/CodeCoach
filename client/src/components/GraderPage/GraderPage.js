import React from 'react';
import './Grader.css';
import GraderList from './components/graderList'

function GraderPage(props) {
    return (
        <div>
        <div className="container-fluid font graderPageBox"> 
        <h1 className="graderh1">
        👋 Hello there, {props.name}! 
        </h1>
        <div className="graderMiniBox">
        Thank you for helping others learn how to code! Below is a list of some code newbies who need your help! Please be thorough and as informative and helpful with your comments as you can be!
        </div>

        <GraderList />
      </div>
      
      </div>
    );
  }

  export default GraderPage;