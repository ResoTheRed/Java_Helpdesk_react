import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/authActions';

const LoggedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/admin">Admin</NavLink>
      </li>
      <li>
        <NavLink to="/mentor">Mentor</NavLink>
      </li>
      <li>
        <a onClick={props.logout} href="/login">
          Logout
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating amber darken-1">
          User
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(null, mapDispatchToProps)(LoggedInLinks);
