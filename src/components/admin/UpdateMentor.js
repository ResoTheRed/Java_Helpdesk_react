import React, { Component } from 'react';
import './Admin.css';
import { connect } from 'react-redux';
import { updateMentor } from '../../store/actions/adminSettingsActions';
import M from 'materialize-css';

class UpdateMentor extends Component {

    constructor(prop){
        super(prop);
        this.state = {
            email: '',
            semester: '',
            year: '',
            level: ''
        };
    
    
    }


    handleChange = (e) => {
        if(e.target.id === 'year'){ 
            this.setState({
                [e.target.id]: "" + (parseInt(new Date().getFullYear(),10) + parseInt(e.target.value,10))
            });    
        }
        else{
            this.setState({
            [e.target.id]: e.target.value
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateMentor(this.state).then((status) => {
            if (status && status.type === 'SUCCESS_UPDATING_MENTOR') {
                M.toast({ html: 'Successfully updated the mentor!' });
            }
            else if (status && status.type === 'ERROR_MENTOR_DOESNOT_EXISTS') {
                M.toast({ html: 'The mentor you are trying to update does not exist!' });
            }
            else {
                M.toast({ html: 'Sorry we encountered error with firebase!' });
            }
        });
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="card-content">
                    <span className="row">
                        <span className="col s12"><h4>Update an Existing Mentor</h4></span>
                    </span>
                    <div className="row">
                        <span className="col s12 m10 offset-l1 input-field">
                            <input id="email" type='email' onChange={this.handleChange} />
                            <label >Email</label>
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
                        <div className="col s12 m3 offset-s1 input-field">
                            <select className="browser-default" onChange={this.handleChange} id="year">
                                <option value="">Choose</option>
                                <option value="0">{new Date().getFullYear()}</option>
                                <option value="-2">{new Date().getFullYear() - 2}</option>
                                <option value="-1">{new Date().getFullYear() - 1}</option>
                                <option value="1">{new Date().getFullYear() + 1}</option>
                            </select>
                            <label className="active">Year</label>
                        </div>
                        <div className="col s12 m3 offset-s1 input-field">
                            <select className="browser-default" onChange={this.handleChange} id="level">
                                <option value="">Choose</option>
                                <option value="Freshman">Freshman</option>
                                <option value="-Sophomore">Sophomore</option>
                                <option value="-Junior">Junior</option>
                                <option value="Senior">Senior</option>
                                <option value="Graduate">Graduate</option>
                            </select>
                            <label className="active">Level</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn blue darken-4 wave-effect wave-light" type="submit">Save Mentor</button>
                    </div>
                </div>
            </form>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateMentor: (mentorData) => dispatch(updateMentor(mentorData))
    }
}

export default connect(null, mapDispatchToProps)(UpdateMentor)