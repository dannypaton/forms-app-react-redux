function formOneSubmitted(state = [], action) {
  switch(action.type) {
    case 'FORMONE_SUBMIT':
      // return the new state with the new comment
      return [...state,{
        firstName: action.firstName,
        lastName: action.lastName
      }];
    default:
      return state;
  }
}

export default formOneSubmitted;
