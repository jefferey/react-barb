import React from 'react';

const InfoDisplay = (props) => {
  let last = props.people.length - 1;
  let people = props.people.map((person, index) => {
    return (
      <span key={'person_' + index}>{ person + (index === last ? '' : index === last - 1 ? ' and ' : ', ') }</span>
    );
  });

  return (
    <div>
      {people.length > 0 ? people : 'No one'} {props.people.length > 1 ? 'are' : 'is'} going to {props.location ? props.location : 'nowhere'}
    </div>
  );
};

InfoDisplay.propTypes = {
  location: React.PropTypes.string,
  people: React.PropTypes.array
}

InfoDisplay.defaultProps = {
  location: '',
  people: []
}

export default InfoDisplay;
