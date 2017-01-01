import { LOCATION_SET } from '../actions/locationActions'

const location = (state="", action) => {
  switch (action.type) {
    case LOCATION_SET:
      return action.location;
    default:
      return state;
  }
}

export default location
