// an action in redux: something that happens in your application
// 1. type of action that happened
// 2. payload of information that is needed

// action: an object with some information about what happened AND what needs to change

// form one submit
export function formOneAdd(firstName, lastName) {
  return {
    type: 'FORMONE_SUBMIT',
    firstName,
    lastName
  }
}

// form two submit
export function formTwoAdd(firstName, lastName) {
  return {
    type: 'FORMTWO_SUBMIT',
    firstName,
    lastName
  }
}