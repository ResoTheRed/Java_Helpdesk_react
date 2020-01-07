import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitStudentProblem } from '../../store/actions/studentProblemActions';
import M from 'materialize-css';

class StudentProblem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      issue: 'Technical',
      classes: 'Java 1583'
    };
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitStudentProblem(this.state).then((status) => {
      if (status && status.type === 'SUCCESS_ADDING_STUDENT_PROBLEM') {
        M.toast({ html: 'Successfully joined the queue!' });
      } else {
        M.toast({ html: 'Sorry we cannot add you to the queue right now!' });
      }
    });
  };

  render() {
    const { firebaseStatus } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card-content">
          <div>
            <h4>Submit Your Issue Here</h4>
          </div>
          <div className="row">
            <div className="col s2 offset-s2 input-field">
              <input type="text" id="username" onChange={this.handleChange} required />
              <label htmlFor="username">Username</label>
            </div>
            <div className="col s3 input-field">
              <select className="browser-default" onChange={this.handleChange} id="issue">
                <option value="Technical">Technical</option>
                <option value="Lecture">Lecture</option>
                <option value="Lab">Lab</option>
                <option value="Homework">Homework</option>
              </select>
              <label className="active" htmlFor="issue">
                Issue
              </label>
            </div>
            <div className="col s3 input-field">
              <select className="browser-default" onChange={this.handleChange} id="classes">
                <option value="" disabled defaultValue>
                  Choose your option
                </option>
                <option value="Java 1583">Java 1583</option>
                <option value="Java 1581">Java 1581</option>
                <option value="Java 2120">Java 2120</option>
                <option value="Java 2121">Java 2121</option>
                <option value="Data Structures 2125">Data Structures 2125</option>
                <option value="Assembly 2450">Assembly 2450</option>
                <option value="Systems 2467">Systems 2467</option>
              </select>
              <label className="active" htmlFor="classes">
                Classes
              </label>
            </div>
          </div>
          <button className="btn blue darken-4" type="submit" id="submitButton">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firebaseStatus: state.studentProblemReducer.firebaseStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitStudentProblem: (studentProblemData) => dispatch(submitStudentProblem(studentProblemData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProblem);