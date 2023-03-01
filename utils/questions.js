const MANAGER_QUESTIONS = [
  {
    type: "input",
    name: "name",
    message: "What's the name of your manager?"
  },
  {
    type: "input",
    name: "id",
    message: "What's the employee ID of your manager?"
  },
  {
    type: "input",
    name: "email",
    message: "What's the Email address of your manager?"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What's the office number of your manager?"
  }
];

const ENGINEER_QUESTIONS = [
  {
    type: "input",
    name: "name",
    message: "What's the name of your engineer?"
  },
  {
    type: "input",
    name: "id",
    message: "What's the employee ID of your engineer?"
  },
  {
    type: "input",
    name: "email",
    message: "What's the Email address of your engineer?"
  },
  {
    type: "input",
    name: "githubUserName",
    message: "What's the GitHub username of your engineer?"
  }
];

const INTERN_QUESTIONS = [
  {
    type: "input",
    name: "name",
    message: "What's the name of your intern?"
  },
  {
    type: "input",
    name: "id",
    message: "What's the employee ID of your intern?"
  },
  {
    type: "input",
    name: "email",
    message: "What's the Email address of your intern?"
  },
  {
    type: "input",
    name: "school",
    message: "What's the school of your intern?"
  }
];

const MENU_CHOICES = {
  addEngineer: "Add an engineer",
  addIntern: "Add an intern",
  finish: "Finish builiding the team"
};

const MENU_OPTION_QUESTIONS = [
  {
    type: "list",
    name: "menuOption",
    message: "What would you like to do next?",
    choices: [
      MENU_CHOICES.addEngineer,
      MENU_CHOICES.addIntern,
      MENU_CHOICES.finish
    ]
  }
];

exports.MANAGER_QUESTIONS = MANAGER_QUESTIONS;
exports.ENGINEER_QUESTIONS = ENGINEER_QUESTIONS;
exports.INTERN_QUESTIONS = INTERN_QUESTIONS;
exports.MENU_CHOICES = MENU_CHOICES;
exports.MENU_OPTION_QUESTIONS = MENU_OPTION_QUESTIONS;
