/*
 * action types
 */

export const PEOPLE_ADD = 'PEOPLE_ADD';
export const PEOPLE_REMOVE = 'PEOPLE_REMOVE';

/*
 * action creators
 */

export function addPerson(person) {
  return { type: PEOPLE_ADD, person };
}

export function removePerson(person) {
  return { type: PEOPLE_REMOVE, person };
}
