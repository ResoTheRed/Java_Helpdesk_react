import React from 'react'
import { Link } from 'react-router-dom'
import LoggedInLinks from '../loggedInLinks/LoggedInLinks'
import LoggedOutLinks from '../loggedOutLinks/LoggedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props;
  console.log(auth);
  const linksToShow =  auth.uid ? <LoggedInLinks /> : <LoggedOutLinks/>
  return(
    <nav className="nav-wrapper blue darken-4">
      <div className="container">
        <Link to='/' className="brand-logo center">Computer Science Tutoring Center</Link>
        {linksToShow }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseReducer.auth
  }
}

export default connect(mapStateToProps)(Navbar)