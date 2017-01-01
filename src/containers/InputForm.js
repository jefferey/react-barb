import React from 'react';
import { connect } from 'react-redux'
import { setLocation } from '../actions/locationActions'
import { addPerson, removePerson } from '../actions/peopleActions'

const PEOPLE_OPTIONS = [ 'Alice', 'Bob', 'Chris', 'Doug', 'Eugene', 'Fred' ];

class InputForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onLocationChanged = this.onLocationChanged.bind(this);
    this.onPersonChanged = this.onPersonChanged.bind(this);
  }

  onLocationChanged(e) {
    this.props.setLocation(e.target.value);
  }

  onPersonChanged(e) {
    if (e.target.checked) {
      this.props.addPerson(e.target.value);
    }
    else {
      this.props.removePerson(e.target.value);
    }
  }

  render() {
    let peopleChecks = PEOPLE_OPTIONS.map(person => {
      return (
        <div key={"label-" + person}>
          <label>
            <input type="checkbox" value={person} onChange={this.onPersonChanged} checked={this.props.people.indexOf(person) !== -1} /> {person}
          </label>
        </div>
      );
    });

    return (
      <div>
        <label htmlFor="location_select">Location:</label>
        <select id="location_select" onChange={this.onLocationChanged}>
          <option></option>
          <option>Japan</option>
          <option>Iceland</option>
          <option>the Moon</option>
          <option>Mars</option>
        </select>
        <br />
        <br />
        <span>People:</span><br />
        {peopleChecks}
      </div>
    );
  }
}

InputForm.propTypes = {
  location: React.PropTypes.string.isRequired,
  people: React.PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
  	people: state.people
  }
}

export default connect(
  mapStateToProps,
  {
    setLocation,
    addPerson,
    removePerson
  }
)(InputForm)
