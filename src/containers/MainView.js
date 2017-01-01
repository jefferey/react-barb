import React from 'react';
import { connect } from 'react-redux';
import InfoDisplay from '../components/InfoDisplay';
import InputForm from './InputForm';

const MainView = (props) => {
  return (
    <div>
      <InfoDisplay location={props.location} people={props.people} />
      <br />
      <InputForm />
    </div>
  );
};

MainView.propTypes = {
  location: React.PropTypes.string.isRequired,
  people: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
    people: state.people
  };
};

export default connect(mapStateToProps)(MainView);
