import React, { Component } from 'react';
import Current from './Current.js';
import './Queue.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Queue extends Component {
  constructor(prop) {
    super(prop);
    this.timer = React.createRef();
    this.state = {
      queue_entry: [],
      index: 0
    };
  }

  render() {
    const { studentQueue } = this.props;
    if (studentQueue) {
      return (
        <div className="card-content">
          <div className="row">
            <h4 className="s12">Service Queue</h4>
          </div>
          <Current ref={this.timer} />
          <div className="row">
            <table className="highlight centered striped">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Issue</th>
                  <th>User</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(studentQueue).map(function(studentData, index) {
                  if (studentQueue[studentData]) {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{studentQueue[studentData].issue}</td>
                        <td>{studentQueue[studentData].username}</td>
                        <td>{studentQueue[studentData].classes}</td>
                      </tr>
                    );
                  } else {
                    return null;
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return null;
    }
  } //end render
}

const mapStateToProps = (state, ownProps) => {
  const queue = state.firestoreReducer.data.Queue;
  const studentQueue = queue ? queue : null;
  return {
    studentQueue: studentQueue
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'Queue',
      orderBy: ['createdAt', 'asc']
    }
  ])
)(Queue);
