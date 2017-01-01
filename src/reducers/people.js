import { PEOPLE_ADD, PEOPLE_REMOVE } from '../actions/peopleActions';

const people = (state=[], action) => {
  switch (action.type) {
    case PEOPLE_ADD:
      return [...state, action.person];
    case PEOPLE_REMOVE: {
      const index = state.indexOf(action.person);
      return index === -1 ? [...state] : [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
};

export default people;
