import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./Navbar.css";

class Dashboard extends Component {
  state = {
    collapsed: true,
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  toggleNavbar = event => {

    this.setState({
      collapsed: false
    })
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={this.collapsed} navbar>
            <Nav navbar className="navbardiv">
              <NavItem>
                <NavLink href="#">GraderDashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">LearnerDashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">LearnerAssignments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">LearnerTimeline</NavLink>
              </NavItem>
              <NavItem>
                <button className="btn btn-primary LogoutBtn"
                  onClick={this.onLogoutClick}>
                  Logout
            </button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);