/*
 * action types
 */

export const LOCATION_SET = 'LOCATION_SET';

/*
 * action creators
 */

export function setLocation(location) {
  return { type: LOCATION_SET, location };
}
