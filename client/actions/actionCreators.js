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