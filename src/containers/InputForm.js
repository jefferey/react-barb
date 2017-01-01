import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../actions/locationActions';
import { addPerson, removePerson } from '../actions/peopleActions';

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
    const peopleChecks = PEOPLE_OPTIONS.map(person => {
      return (
        <div key={`label-${person}`}>
          <input type="checkbox" value={person} onChange={this.onPersonChanged} checked={this.props.people.indexOf(person) !== -1} /> {person}
        </div>
      );
    });

    return (
      <div>
        <label htmlFor="location_select">Location:</label>
        <select id="location_select" onChange={this.onLocationChanged}>
          <option selected={!this.props.location} />
          <option selected={this.props.location === 'Japan'}>Japan</option>
          <option selected={this.props.location === 'Iceland'}>Iceland</option>
          <option selected={this.props.location === 'the Moon'}>the Moon</option>
          <option selected={this.props.location === 'Mars'}>Mars</option>
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
  people: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  addPerson: React.PropTypes.func,
  removePerson: React.PropTypes.func,
  setLocation: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
    people: state.people
  };
};

export default connect(
  mapStateToProps,
  {
    setLocation,
    addPerson,
    removePerson
  }
)(InputForm);
