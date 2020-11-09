import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./Navbar.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <Navbar className="sticky-top" color="faded" light expand="lg">
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink href="/gdashboard">GraderDashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ldashboard">LearnerDashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/lassignments">LearnerAssignments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ltimeline">LearnerTimeline</NavLink>
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
NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
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