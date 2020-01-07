import React from 'react';
import Introduction from './Introduction.js';
import ScheduleView from './ScheduleView.js';
import Queue from './Queue.js';
import StudentProblem from './StudentProblem.js';

const Home = () => {
  return(
    <React.Fragment>
      <div className="container">
        <div className="card grey lighten-5">
          <Introduction/>
        </div>
        <div className="card grey lighten-5 hoverable">
          <ScheduleView/>
          <StudentProblem/>
        </div>
        <div className="card grey lighten-5 hoverable">
          <Queue/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home
