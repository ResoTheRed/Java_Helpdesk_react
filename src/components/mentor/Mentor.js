import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase'
import Progressbar from '../widgets/progressbar/Progressbar';
import SessionClock from './SessionClock'

class Mentor extends Component {
  render() {
    const { auth } =  this.props;
    if (!isLoaded(auth)) {
      return (
        <Progressbar/>
      )
    }
    if(isEmpty(auth)) {
      return <Redirect to="/login" />
    }
    return (
        <React.Fragment>
          <div className="container">
            <div className="card grey lighten-5">
              <SessionClock/>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseReducer.auth
  }
}

export default connect(mapStateToProps, null)(Mentor)