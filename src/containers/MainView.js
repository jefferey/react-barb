import React from 'react';
import { connect } from 'react-redux'
import InfoDisplay from '../components/InfoDisplay'
import InputForm from './InputForm'

class MainView extends React.Component {
  constructor(props, context) {
		super(props, context);
	}

  render() {
    return (
      <div>
        <InfoDisplay location={this.props.location} people={this.props.people} />
        <br />
        <InputForm />
      </div>
    );
  }
}

MainView.propTypes = {
  location: React.PropTypes.string.isRequired,
  people: React.PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
  	people: state.people
  }
}

export default connect(mapStateToProps)(MainView)
