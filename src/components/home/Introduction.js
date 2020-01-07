import React, { Component } from 'react';
import helpdeskimg from "./img/helpdesk.jpg";

class Introduction extends Component {
  state = {}
  handleChange = (e) => {
    console.log(e);
  }
  handleSubmit = (e) =>{
    console.log(e);
  }
  render() {
    return(
            <div className="row">
                <div className="col s12">
                    <div className="card-content">
                        <span className="card-title">Tutoring Center</span>
                        <p className="left-align">The Help Desk is a resource for CSCI students to get help with 1000 and 2000 level courses and labs. It is available throughout the semester in room 319 of the Mathematics Building. 
                        This scheduler is designed to help students avoid long lines and frustration by displaying the help queue and whether a mentor is available.</p>
                        <br/>
                        <img src={helpdeskimg} alt="Help Desk" width="300px"></img>
                    </div>
                </div>
            </div>
    )
  }
}

export default Introduction