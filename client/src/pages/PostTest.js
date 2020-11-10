import React, {Component} from "react";
import Navbar from "../components/Navbar/Navbar";

class PostTest extends Component {
  render(props) {

    console.log("props");
    console.log(props);

    return (
      <>
      <Navbar />
      <div>
        <h1>This is the Test Page for Assignments</h1>
        <h2>{props}</h2>
          
      </div>
      </>
    );
  };
  };
  
  export default PostTest;