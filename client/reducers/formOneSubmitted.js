// default state variable
const initialState = {
  firstName: '',
  lastName: ''
}

function formOneSubmitted(state = initialState, action) {
  switch (action.type) {
    case 'FORMONE_SUBMIT':
      // return the new state with the new submitted data
      return [...state, {
        firstName: action.firstName,
        lastName: action.lastName
      }];
    default:
      return state;
  }
}

export default formOneSubmitted;
