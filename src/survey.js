module.exports = {
  title: 'Survey Example',
  showProgressBar: 'top',
  questions: [{
    name: 'first',
    type: 'text',
    title: 'First',
    placeHolder: 'John',
    // isRequired: true,
  }, {
    name: 'last',
    type: 'text',
    title: 'Last',
    placeHolder: 'Smith',
    // isRequired: true,
  }, {
    name: 'email',
    type: 'text',
    inputType: 'email',
    title: 'Email',
    placeHolder: 'john.smith@gmail.com',
    validators: [{ type: 'email' }],
    // isRequired: true,
  }],
};
