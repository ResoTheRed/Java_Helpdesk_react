import React, { Component } from 'react';
import './Current.css';

/*
    This component displays the currently being helped student, pulled from the popped
    name in the parent queue component.
*/
class Current extends Component {
    constructor (props) {
        super(props);
        this.state = {
            assisting: "None",
            minutes: "0",
            seconds: "00",
        }
        this.startTimer = this.startTimer.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }
  startTimer = (name) => {
    if(name === undefined) {
        name = "None"
    }

    this.setState({
        assisting: name,
        minutes: "0",
        seconds: "00",
    });
    
    if(this.interval) {
        clearInterval(this.interval);
    }
    if(name !== "None") {
        this.interval = setInterval(this.updateTimer, 1000)
    }
  }
  updateTimer = () => {
    var seconds = parseInt(this.state.seconds) + 1;
    var minutes = parseInt(this.state.minutes);
    if(seconds === 60) {
        minutes = minutes + 1;
        seconds = "00";
    }
    else if(seconds < 10) {
        seconds = "0" + seconds;
    }
    this.setState({
        minutes: minutes,
        seconds: seconds
    })
  }
  resetTimer = () => {
      this.setState({
          assisting: "None",
          minutes: "0",
          seconds: "00"
      })
      clearInterval(this.interval)
  }

  render() {
    return(
        <div id="current" className="row card grey lighten-5">
            <div>
                <b>Assisting</b> [{this.state.assisting}]<br/>
                <b>Duration:</b> {this.state.minutes}:{this.state.seconds}
            </div>
            
        </div>    
    )
  }
}

export default Current