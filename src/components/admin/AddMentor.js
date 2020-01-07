import React, { Component } from 'react';
import './Admin.css';
import { connect } from 'react-redux';
import { addNewMentor } from '../../store/actions/adminSettingsActions';
import M from 'materialize-css';

class AddMentor extends Component {

    constructor(prop){
        super(prop);
        this.state = {
            name : '',
            email : '',
            userName : '',
            password : '',
            semester : '',
            year : '',
            level : ''
        }; 
    }    

    handleChange = (e) => {
        if(e.target.id === 'year'){
            this.setState({
                [e.target.id]: "" + (parseInt(new Date().getFullYear(),10) + parseInt(e.target.value,10))
            });    
        }else{
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewMentor(this.state).then((status) => {
            if (status && status.type === 'SUCCESS_ADDING_NEW_MENTOR') {
                M.toast({ html: 'Successfully added mentor!' });
            }
            else {
                M.toast({ html: 'Sorry we cannot add the mentor!'});
            }
        });
    }
    
    render(){
        return(
            <form  onSubmit={this.handleSubmit}>
                <div className="card-content" id="addMentorBox">
                <span className="row">
                    <span className="col s12"><h4>Add a New Mentor</h4></span>
                </span>
                <div className="row">
                    <span className="col s12 l5 offset-l1 input-field">
                        <input id="name" type='text' onChange={this.handleChange}/>
                        <label >Name</label>
                    </span>
                    <span className="col s12 l5 input-field">
                        <input id="email" type='email' onChange={this.handleChange}/>
                        <label >Email</label>
                    </span>
                </div>
                <div className="row">
                    <span className="col s12 l5 offset-l1 input-field">
                        <input id="userName" type='text' onChange={this.handleChange}/>
                        <label >Username</label>
                    </span>
                    <span className="col s12 l5 input-field">
                        <input id="password" type='password' onChange={this.handleChange}/>
                        <label >Password</label>
                    </span>
                </div>
                <div className="row">
                    <div className="col s12 l3 offset-l1 input-field">
                        <select className="browser-default" onChange={this.handleChange} id="semester">
                            <option value="">Choose</option>
                            <option value="Fall">Fall</option>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                        </select>
                        <label className="active">Semester</label>
                    </div>
                    <div className="col s12 l3 offset-s1 input-field">
                        <select className="browser-default" onChange={this.handleChange} id="year">
                            <option value="">Choose</option>
                            <option value="0">{new Date().getFullYear()}</option>
                            <option value="-2">{new Date().getFullYear()-2}</option>
                            <option value="-1">{new Date().getFullYear()-1}</option>
                            <option value="1">{new Date().getFullYear()+1}</option>
                        </select>
                        <label className="active">Year</label>
                    </div>
                    <div className="col s12 l3 offset-s1 input-field">
                        <select className="browser-default" onChange={this.handleChange} id="level">
                            <option value="">Choose</option>
                            <option value="Freshman">Freshman</option>
                            <option value="-Sophomore">Sophomore</option>
                            <option value="-Junior">Junior</option>
                            <option value="Senior">Senior</option>
                            <option value="Graduate">Graduate</option>
                        </select>
                        <label className="active" >Level</label>
                    </div>
                </div>
                <div className="row">
                    <button className="btn blue darken-4 wave-effect wave-light" type="submit">Add Mentor</button>
                </div>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMentor: (mentorData) => dispatch(addNewMentor(mentorData))
    }
}

export default connect(null,mapDispatchToProps) (AddMentor)