import React, { Component } from 'react';

{/*
* This component is designed to display the help desk schedule.  As of now, it allows for up to
* three mentors to be listed.  It's state consists of lists of times for each day in the form of 
* strings.  I tried to update the state by doing setState() but was getting an error.  I don't 
* know what I'm doing so I changed the state variable direcly. The this component is not currently 
* responsive. I also cannot figure out how to link a css file for styling to this component. 
*/}

class ScheduleView extends Component {
    
    constructor(props) {
        super(props);
        // The state consists of mentor's names and an array of their schedule mon to fri
        this.state = {
            mentor1_name: 'Mentor 1',
            mentor2_name: 'Mentor 2',
            mentor3_name: 'Mentor 3',
            monday: ['8 AM - 9 AM', '9 AM - 9:30 AM','9:30 AM - 10 AM', '10 AM - 11 AM', '11 AM - 12 PM','12 AM - 12:30 PM', '12:30 PM - 1 PM', '1 PM - 2 PM', '2 PM - 3 PM', '3 PM - 4 PM', '4 PM - 5 PM','5 PM -6 PM','6 PM - 7 PM'],
            tuesday: ['8 AM - 9 AM', '9 AM - 9:30 AM','9:30 AM - 10 AM', '10 AM - 11 AM', '11 AM - 12 PM','12 AM - 12:30 PM', '12:30 PM - 1 PM', '1 PM - 2 PM', '2 PM - 3 PM', '3 PM - 4 PM', '4 PM - 5 PM','5 PM -6 PM','6 PM - 7 PM'],
            wednesday: ['8 AM - 9 AM', '9 AM - 9:30 AM','9:30 AM - 10 AM', '10 AM - 11 AM', '11 AM - 12 PM','12 AM - 12:30 PM', '12:30 PM - 1 PM', '1 PM - 2 PM', '2 PM - 3 PM', '3 PM - 4 PM', '4 PM - 5 PM','5 PM -6 PM','6 PM - 7 PM'],
            thursday: ['8 AM - 9 AM', '9 AM - 9:30 AM','9:30 AM - 10 AM', '10 AM - 11 AM', '11 AM - 12 PM','12 AM - 12:30 PM', '12:30 PM - 1 PM', '1 PM - 2 PM', '2 PM - 3 PM', '3 PM - 4 PM', '4 PM - 5 PM','5 PM -6 PM','6 PM - 7 PM'],
            friday: ['8 AM - 9 AM', '9 AM - 9:30 AM','9:30 AM - 10 AM', '10 AM - 11 AM', '11 AM - 12 PM','12 AM - 12:30 PM', '12:30 PM - 1 PM', '1 PM - 2 PM', '2 PM - 3 PM', '3 PM - 4 PM', '4 PM - 5 PM','5 PM -6 PM','6 PM - 7 PM'],
        }
        this.setNames = this.setNames.bind(this);
        this.resetNames = this.resetNames.bind(this);
        this.resetSchedule = this.resetSchedule.bind(this);
        this.setTimes = this.setTimes.bind(this);
        // this.setstate = {
        //     black: true
        //  }
    }//end constructor
    // state = {
    //     color: 'red'
    // }
    // onChange = () => {
    //     this.renderMonday.mondayItems = 'blue';
    // }

    // Takes in three string variables to set mentors names to
    setNames(_name1,_name2,_name3){
            this.state.mentor1_name =_name1;
            this.state.mentor2_name = _name2;
            this.state.mentor3_name = _name3
    }

    resetNames(){
        this.setNames("","","")
    }

    // reset all of the schedule
    resetSchedule(){
        this.state.monday = [];
        this.state.tuesday = [];
        this.state.wednesday = [];
        this.state.thursday = [];
        this.state.friday = [];
    }
    // update the array of strings of times for days of the week
    // takes in a array of times and a string day
    setTimes(_time, _day){
        if(_day==="Monday")
            this.state.monday = _time;
        else if(_day==="Tuesday")
            this.state.tuesday = _time;
        else if(_day==="Wednesday")
            this.state.wednesday = _time;
        else if(_day==="Thursday")
            this.state.thursday = _time;
        else if(_day==="Friday")
            this.state.friday = _time;
    }
    
    // I don't know what these things do
    _handleChange = (e) => {
        console.log(e);
    };
    get handleChange() {
        return this._handleChange;
    }
    set handleChange(value) {
        this._handleChange = value;
    }
    handleSubmit = (e) =>{
      console.log(e);
    }
    renderMonday(monday) {
        let mondayItems = []
        for (var i=0; i < this.state.monday.length; i++) {
            mondayItems.push(<div id={"monday_"+i}>{this.state.monday[i]}</div>);
        }
        return mondayItems;
    }
    rendertuesday(tuesday) {
        let tuesdayItems = []
        for (var i=0; i < this.state.tuesday.length; i++) {
            tuesdayItems.push(<div id={"tuesday_"+i}>{this.state.tuesday[i]}</div>);
        }
        return tuesdayItems;
    }
    renderwednesday(wednesday) {
        let wednesdayItems = []
        for (var i=0; i < this.state.wednesday.length; i++) {
           wednesdayItems.push(<div id={"wednesday_"+i}>{this.state.wednesday[i]}</div>);
        }
        return wednesdayItems;
    }
    renderthursday(thursday) {
        let thursdayItems = []
        for (var i=0; i < this.state.thursday.length; i++) {
            thursdayItems.push(<div id={"thursday_"+i}>{this.state.thursday[i]}</div>);
        }
        return thursdayItems;
    }
    renderfriday(friday) {
        let fridayItems = []
        for (var i=0; i < this.state.friday.length; i++) {
            fridayItems.push(<div id={"friday_"+i}>{this.state.friday[i]}</div>);
        }
        return fridayItems;
    }

    activateTimeTableForMentor_1(){
        alert('Nazir is Selected');
       document.getElementById('monday_4').style.fontWeight = "900";
       document.getElementById('monday_5').style.fontWeight = "900";
       document.getElementById('tuesday_2').style.fontWeight = "900";
       document.getElementById('tuesday_3').style.fontWeight = "900";
       document.getElementById('wednesday_4').style.fontWeight = "900";
       document.getElementById('wednesday_5').style.fontWeight = "900";
       document.getElementById('thursday_2').style.fontWeight = "900";
       document.getElementById('thursday_3').style.fontWeight = "900";
       document.getElementById('friday_3').style.fontWeight = "900";
       document.getElementById('friday_4').style.fontWeight = "900";
       document.getElementById('friday_5').style.fontWeight = "900";

       document.getElementById('monday_6').style.fontWeight = "400";       
       document.getElementById('monday_7').style.fontWeight = "400";
       document.getElementById('monday_8').style.fontWeight = "400";
       document.getElementById('wednesday_6').style.fontWeight = "400";       
       document.getElementById('wednesday_7').style.fontWeight = "400";
       document.getElementById('wednesday_8').style.fontWeight = "400";
       document.getElementById('thursday_4').style.fontWeight = "400";
       document.getElementById('thursday_7').style.fontWeight = "400";
       document.getElementById('thursday_8').style.fontWeight = "400";

       document.getElementById('monday_1').style.fontWeight = "400";
        document.getElementById('monday_2').style.fontWeight = "400";
        document.getElementById('monday_3').style.fontWeight = "400";
        document.getElementById('monday_11').style.fontWeight = "400";
        document.getElementById('monday_12').style.fontWeight = "400";
        document.getElementById('tuesday_11').style.fontWeight = "400";
        document.getElementById('tuesday_12').style.fontWeight = "400"; 
        document.getElementById('wednesday_1').style.fontWeight = "400";
        document.getElementById('wednesday_2').style.fontWeight = "400";
        document.getElementById('wednesday_3').style.fontWeight = "400";
        document.getElementById('wednesday_11').style.fontWeight = "400";
        document.getElementById('wednesday_12').style.fontWeight = "400"; 
        document.getElementById('thursday_11').style.fontWeight = "400";
        document.getElementById('thursday_12').style.fontWeight = "400";
        document.getElementById('friday_1').style.fontWeight = "400";
        document.getElementById('friday_2').style.fontWeight = "400";
        document.getElementById('friday_3').style.fontWeight = "400"; 
        document.getElementById('friday_7').style.fontWeight = "400";
        document.getElementById('friday_8').style.fontWeight = "400";
        document.getElementById('friday_9').style.fontWeight = "400";
        document.getElementById('friday_10').style.fontWeight = "400";
        document.getElementById('friday_11').style.fontWeight = "400";
    }

    activateTimeTableForMentor2(){
        alert('Pooja is Selected');
       document.getElementById('monday_6').style.fontWeight = "900";       
       document.getElementById('monday_7').style.fontWeight = "900";
       document.getElementById('monday_8').style.fontWeight = "900";
       document.getElementById('wednesday_6').style.fontWeight = "900";       
       document.getElementById('wednesday_7').style.fontWeight = "900";
       document.getElementById('wednesday_8').style.fontWeight = "900";
       document.getElementById('thursday_4').style.fontWeight = "900";
       document.getElementById('thursday_7').style.fontWeight = "900";
       document.getElementById('thursday_8').style.fontWeight = "900";

       document.getElementById('monday_4').style.fontWeight = "400";
       document.getElementById('monday_5').style.fontWeight = "400";
       document.getElementById('tuesday_2').style.fontWeight = "400";
       document.getElementById('tuesday_3').style.fontWeight = "400";
       document.getElementById('wednesday_4').style.fontWeight = "400";
       document.getElementById('wednesday_5').style.fontWeight = "400";
       document.getElementById('thursday_2').style.fontWeight = "400";
       document.getElementById('thursday_3').style.fontWeight = "400";
       document.getElementById('friday_3').style.fontWeight = "400";
       document.getElementById('friday_4').style.fontWeight = "400";
       document.getElementById('friday_5').style.fontWeight = "400";

       document.getElementById('monday_1').style.fontWeight = "400";
        document.getElementById('monday_2').style.fontWeight = "400";
        document.getElementById('monday_3').style.fontWeight = "400";
        document.getElementById('monday_11').style.fontWeight = "400";
        document.getElementById('monday_12').style.fontWeight = "400";
        document.getElementById('tuesday_11').style.fontWeight = "400";
        document.getElementById('tuesday_12').style.fontWeight = "400"; 
        document.getElementById('wednesday_1').style.fontWeight = "400";
        document.getElementById('wednesday_2').style.fontWeight = "400";
        document.getElementById('wednesday_3').style.fontWeight = "400";
        document.getElementById('wednesday_11').style.fontWeight = "400";
        document.getElementById('wednesday_12').style.fontWeight = "400"; 
        document.getElementById('thursday_11').style.fontWeight = "400";
        document.getElementById('thursday_12').style.fontWeight = "400";
        document.getElementById('friday_1').style.fontWeight = "400";
        document.getElementById('friday_2').style.fontWeight = "400";
        document.getElementById('friday_3').style.fontWeight = "400"; 
        document.getElementById('friday_7').style.fontWeight = "400";
        document.getElementById('friday_8').style.fontWeight = "400";
        document.getElementById('friday_9').style.fontWeight = "400";
        document.getElementById('friday_10').style.fontWeight = "400";
        document.getElementById('friday_11').style.fontWeight = "400";
         
    }

    activateTimeTableForMentor_3(){
        alert('Jonathan is Selected');
        document.getElementById('monday_1').style.fontWeight = "900";
        document.getElementById('monday_2').style.fontWeight = "900";
        document.getElementById('monday_3').style.fontWeight = "900";
        document.getElementById('monday_11').style.fontWeight = "900";
        document.getElementById('monday_12').style.fontWeight = "900";
        document.getElementById('tuesday_11').style.fontWeight = "900";
        document.getElementById('tuesday_12').style.fontWeight = "900"; 
        document.getElementById('wednesday_1').style.fontWeight = "900";
        document.getElementById('wednesday_2').style.fontWeight = "900";
        document.getElementById('wednesday_3').style.fontWeight = "900";
        document.getElementById('wednesday_11').style.fontWeight = "900";
        document.getElementById('wednesday_12').style.fontWeight = "900"; 
        document.getElementById('thursday_11').style.fontWeight = "900";
        document.getElementById('thursday_12').style.fontWeight = "900";
        document.getElementById('friday_1').style.fontWeight = "900";
        document.getElementById('friday_2').style.fontWeight = "900";
        document.getElementById('friday_3').style.fontWeight = "900"; 
        document.getElementById('friday_7').style.fontWeight = "900";
        document.getElementById('friday_8').style.fontWeight = "900";
        document.getElementById('friday_9').style.fontWeight = "900";
        document.getElementById('friday_10').style.fontWeight = "900";
        document.getElementById('friday_11').style.fontWeight = "900";

        document.getElementById('monday_4').style.fontWeight = "400";
       document.getElementById('monday_5').style.fontWeight = "400";
       document.getElementById('tuesday_2').style.fontWeight = "400";
       document.getElementById('tuesday_3').style.fontWeight = "400";
       document.getElementById('wednesday_4').style.fontWeight = "400";
       document.getElementById('wednesday_5').style.fontWeight = "400";
       document.getElementById('thursday_2').style.fontWeight = "400";
       document.getElementById('thursday_3').style.fontWeight = "400";
       document.getElementById('friday_3').style.fontWeight = "400";
       document.getElementById('friday_4').style.fontWeight = "400";
       document.getElementById('friday_5').style.fontWeight = "400";

       document.getElementById('monday_6').style.fontWeight = "400";       
       document.getElementById('monday_7').style.fontWeight = "400";
       document.getElementById('monday_8').style.fontWeight = "400";
       document.getElementById('wednesday_6').style.fontWeight = "400";       
       document.getElementById('wednesday_7').style.fontWeight = "400";
       document.getElementById('wednesday_8').style.fontWeight = "400";
       document.getElementById('thursday_4').style.fontWeight = "400";
       document.getElementById('thursday_7').style.fontWeight = "400";
       document.getElementById('thursday_8').style.fontWeight = "400";

    }

    render() {
        return(
            <div className="card-content">
                {/* contains the title and the names of the current help desk assosicates */}
                <span className="row">
                    <div className="col s12"><h4>Help Desk Schedule</h4></div>
                    <span className="col s12">The Help Desk Mentors</span>
                    <div id="mentorNames">
                        <div className="col s2 offset-s2">
                            <div style={{button: this.state.color}}>
                                <button className="btn blue darken-4 z-depth-0" type="Mentor-1" id="submitButton" onClick={this.activateTimeTableForMentor_1 } style={{backgroundColor:this.state.bgColor}} >Nazir</button>
                            {/* <button ref="test" class="color-button button4" onClick={this.handleClick}>Button 4</button> */}
                        {/* <h5>{this.state.mentor1_name}</h5></div> */}
                            </div>
                        </div>
                        <div className="col s4 ">
                            <div style={{button: this.state.color}}>
                                <button className="btn green darken-4 z-depth-0" type="Mentor-2" id="submitButton" onClick={this.activateTimeTableForMentor2} style={{backgroundColor:this.state.bgColor}}  >Pooja</button>
                            {/* <button ref="test" class="color-button button4" onClick={this.handleClick}>Button 4</button> */}
                        {/* <h5>{this.state.mentor1_name}</h5></div> */}
                            </div>
                        </div>
                        <div className="col s2">
                            <div style={{button: this.state.color}}>
                                <button className="btn orange darken-4 z-depth-0" type="Mentor-3" id="submitButton" onClick={this.activateTimeTableForMentor_3} style={{backgroundColor:this.state.bgColor}} >Jonathan</button>
                            {/* <button ref="test" class="color-button button4" onClick={this.handleClick}>Button 4</button> */}
                        {/* <h5>{this.state.mentor1_name}</h5></div> */}
                            </div>
                        </div>
                    </div>
                </span>
                <div className="row">
                    <section id="daysOfTheWeek">
                        {/* <div className="col s2 sch_label"><h6>Mentor</h6></div> */}
                        <div className="col s2 offset-s1" ><h6>Monday</h6></div>
                        <div className="col s2"><h6>Tuesday</h6></div>
                        <div className="col s2"><h6>Wednesday</h6></div>
                        <div className="col s2"><h6>Thursday</h6></div>
                        <div className="col s2"><h6>Friday</h6></div>
                    </section>
                    {/* List the hours of help desk mentors */}
                    <section id="workingTimes">
                        <div className="col s2 grey lighten-5 offset-s1 mondayHighlight">
                        {this.renderMonday()}
                            
                        </div>
                        <div className="col s2 grey lighten-5 tuesdayHighlight">
                        {this.rendertuesday()}
                           
                        </div>
                        <div className="col s2 grey lighten-5 wednesdayHighlight">
                        {this.renderwednesday()}
                            
                        </div>
                        <div className="col s2 grey lighten-5 thursdayHighlight">
                        {this.renderthursday()}
                            
                        </div>
                        <div className="col s2 grey lighten-5 fridayHighlight">
                        {this.renderfriday()}
                            
                        </div>
                    </section>   
                </div>
            </div>
        )// end return
    }// end render
}// end class


export default ScheduleView