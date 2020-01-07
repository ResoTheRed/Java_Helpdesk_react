import React, { Component } from 'react';
import Queue from '../../components/home/Queue.js';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { removeStudentFromQueue, addStudentDetailsToSession } from '../../store/actions/startSessionActions';
import './SessionClock.css';
import M from 'materialize-css';
import { firestoreConnect } from 'react-redux-firebase';
import Progressbar from '../widgets/progressbar/Progressbar';

var timer = null;
var endTime = 15;

class SessionClock extends Component {
  constructor(prop) {
    super(prop);
    this.queue = React.createRef();
    this.state = {
      min: '00',
      sec: '00',
      ended: false,
      started: false,
      submitted: true
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { studentQueue } = this.props;
    const { timerSettings } = this.props;
    endTime = timerSettings * 1000 * 60;
    if (studentQueue && this.checkForNewSession()) {
      this.startSession();
      this.setState({ started: true, ended: false, submitted: true });
      this.setState(
        {
          currentStudentDetails: Object.values(studentQueue)[0],
          currentStudent: Object.keys(studentQueue)[0]
        },
        () => {
          this.props.removeStudentFromQueue(this.state).then((status) => {
            if (status && status.type === 'SUCCESS_REMOVING_STUDENT_FROM_QUEUE') {
              M.toast({ html: 'Successfully removed from the queue!' });
            } else {
              M.toast({ html: 'Sorry we cannot remove the student form the queue' });
            }
          });
        }
      );
    } else {
      M.toast({ html: 'Cannot start if queue is empty or a submission is pending.' });
    }
  };

  checkForNewSession() {
    return !this.state.started && !this.ended && this.state.submitted;
  }

  checkForEndSession() {
    return this.state.started && !this.state.ended && this.state.submitted;
  }

  checkForSubmissionCriteria() {
    return this.state.started && this.state.ended && !this.state.submitted;
  }

  setTime() {
    let date = new Date();
    this.setState({
      date: '' + date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear(),
      time: '' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    });
  }

  // Update the count down every 1 second
  startSession() {
    let start = new Date().getTime();
    this.setTime();
    var self = this;
    timer = setInterval(function() {
      let now = new Date().getTime();
      let current = now - start;
      if (current >= endTime) {
        self.endSession(timer);
      } else if (true) {
        let minute = '' + Math.floor((current % (1000 * 60 * 60)) / (1000 * 60));
        let second = '' + Math.floor((current % (1000 * 60)) / 1000);
        if (parseInt(minute) < 10) {
          minute = '0' + minute;
        }
        if (parseInt(second) < 10) {
          second = '0' + second;
        }
        self.setState({
          min: '' + minute,
          sec: '' + second
        });
      }
    }, 1000);
  }

  endSessionButton = (e) => {
    e.preventDefault();
    this.endSession();
  };

  submitSessionForm = (e) => {
    e.preventDefault();
    if (this.checkForSubmissionCriteria()) {
      this.setState({ ended: false, started: false, submitted: true });
      this.props.addStudentDetailsToSession(this.state).then((status) => {
        if (status && status.type === 'SUCCESS_ADDING_STUDENT_DETAILS_TO_SESSION') {
          M.toast({ html: 'Successfully added the comments' });
        } else {
          M.toast({ html: 'Sorry we cannot add the comments' });
        }
      });
      window.location.reload(false);
    } else {
      M.toast({ html: 'Must end session before submitting' });
    }
  };

  endSession() {
    if (this.checkForEndSession()) {
      clearInterval(timer);
      this.setState({ ended: true, started: true, submitted: false });
      this.setState({
        min: '00',
        sec: '00',
        submitted: false
      });
    } else {
      M.toast({ html: 'Must start session before ending' });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { timerSettings } = this.props;
    if (timerSettings) {
      return (
        <div className="card-content">
          <div className="row">
            <div className="col s3 session-btns">
              <button className="btn blue darken-4 waves-effect" onClick={this.handleSubmit}>
                Start Session
              </button>
              <button className="btn blue darken-4 waves-effect" onClick={this.endSessionButton}>
                End Session
              </button>
            </div>
            <div className="col s8 offset-s2" id="clock">
              {this.state.min}:{this.state.sec}
            </div>
          </div>
          <div className="row">
            <h4>Analysis</h4>
          </div>
          <form onSubmit={this.submitSessionForm}>
            <div className="row">
              <div className="col s4 offset-s1 input-field">
                <label className="active">Outcome</label>
                <select className="browser-default" onChange={this.handleChange} id="outcome">
                  <option value="" disabled>
                    Choose your option
                  </option>
                  <option value="'The student has a better understanding.'">The student has a better understanding.</option>
                  <option value="'The student has an equal understanding.'">The student has an equal understanding.</option>
                  <option value="'The student has little to no understanding.'">The student has little to no understanding.</option>
                  <option value="'The student didn\'t show up.'">The student didn't show up.</option>
                </select>
              </div>
              <div className="col s5 input-field">
                <label className="active">Comment</label>
                <input placeholder="Leave any extra thoughts here." id="comment" type="text" onChange={this.handleChange} />
              </div>
              <div className="col s1 input-field">
                <button className="btn blue darken-4 waves-effect waves-light" type="submit" id="submitButton">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="s12">
            <Queue ref={this.queue} />
          </div>
        </div>
      );
    } else {
      return <Progressbar />;
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  const queue = state.firestoreReducer.data.Queue;
  const studentQueue = queue ? queue : null;
  const settings = state.firestoreReducer.data.Settings;
  console.log(settings);
  let timerSettings = 20;
  if (settings) {
    timerSettings = settings.timer.sessionDuration ? settings.timer.sessionDuration : 20;
  }
  return {
    studentQueue: studentQueue,
    timerSettings: timerSettings
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeStudentFromQueue: (studentOnQueue) => dispatch(removeStudentFromQueue(studentOnQueue)),
    addStudentDetailsToSession: (studentDetail) => dispatch(addStudentDetailsToSession(studentDetail))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: 'Settings',
      doc: 'timer'
    }
  ])
)(SessionClock);
