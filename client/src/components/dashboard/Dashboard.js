import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API";
import Navbar from "../Navbar";

import GraderPage from "../GraderPage"
import LearnerPage from "../LearnerPage"

class Dashboard extends Component {
  state = {
    isLearner: true
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    API.getPostById(this.props.auth.user.id)
      .then(postData => {
        console.log(postData.data);
        if (postData.data.role === "Learner") {
          this.setState({isLearner: true});
        }
        if (postData.data.role === "Teacher") {
          this.setState({isLearner: false});
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.props.auth;
    
    const isLearnerRole = user.role
    // console.log(`@@@@@@@@@@@@@`)
    // console.log(this.props)
    let pagetoLoad;

    if (isLearnerRole === "Learner") {
      pagetoLoad = <LearnerPage
                    id={user.id}
                    name={user.name.split(" ")[0]}
                />
    } else {
      pagetoLoad = <GraderPage
                    id={user.id}
                    name={user.name.split(" ")[0]}
                 />
    }

    console.log("this.props");
    console.log(this.props);

    return (
      <>
        <div className="container-fluid">

        {/* <p>{this.state.isLearner ? "You're a Learner!" : "You're a Teacher!"}</p> */}

          <Navbar />

          {pagetoLoad}

        </div>
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);