import { combineReducers } from 'redux';
import people from './people';
import location from './location';

const barbApp = combineReducers({
  people,
  location
});

export default barbApp;
