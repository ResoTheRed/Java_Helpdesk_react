import React, { Component } from 'react';
import './Admin.css';
import { connect } from 'react-redux';
import { updateClockSettings } from '../../store/actions/adminSettingsActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import M from 'materialize-css';
import Progressbar from '../widgets/progressbar/Progressbar';

class UpdateSettings extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      sessionDuration: 20
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateClockSettings(this.state).then((status) => {
      if (status && status.type === 'SUCCESS_UPDATING_CLOCK_SETTINGS') {
        M.toast({ html: 'Successfully updated the clock settings!' });
      } else {
        M.toast({ html: 'Sorry we cannot update the settings right now!' });
      }
    });
  };

  render() {
    const { timerSettings } = this.props;
    if (timerSettings) {
      return (
        <form className="card-content" id="sessionClockSettings" onSubmit={this.handleSubmit}>
          <span className="row">
            <span className="col s12">
              <h4>Update Settings</h4>
            </span>
          </span>
          <span className="row">
            <span className="col s12">{timerSettings ? <h6>Current Settings: {timerSettings} Minutes</h6> : null}</span>
          </span>
          <div className="row">
            <div className="col s12 l10 offset-l1 input-field">
              <select className="browser-default" onChange={this.handleChange} id="sessionDuration">
                <option value="">Minutes</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
                <option value="60">60</option>
                <option value="75">75</option>
                <option value="90">90</option>
                <option value="105">105</option>
                <option value="120">120</option>
              </select>
              <label className="active">Update Session Duration</label>
            </div>
          </div>
          <div className="row">
            <button className="btn blue darken-4 wave-effect wave-light" type="submit">
              Save Settings
            </button>
          </div>
        </form>
      );
    } else {
      return <Progressbar />;
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateClockSettings: (settingsData) => dispatch(updateClockSettings(settingsData))
  };
};

const mapStateToProps = (state, ownProps) => {
  const settings = state.firestoreReducer.data.Settings;
  if (settings) {
    const timerSettings = settings.timer.sessionDuration ? settings.timer.sessionDuration : 20;
    return {
      timerSettings: timerSettings
    };
  }
  return {
    timerSettings: 20
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
)(UpdateSettings);
