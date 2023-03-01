const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const {
  MANAGER_QUESTIONS,
  ENGINEER_QUESTIONS,
  INTERN_QUESTIONS,
  MENU_CHOICES,
  MENU_OPTION_QUESTIONS
} = require("./utils/questions");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// get user's answers using inquirer
async function getAnswers(questions) {
  return await inquirer.prompt(questions);
}

// prompt questions about team members to user
async function promptQuetions() {
  let isFinish = false;
  // get manager information to create a manager
  const managerInfo = await getAnswers(MANAGER_QUESTIONS);
  // store all engineers information
  const engineersInfoArr = [];
  // store all interns information
  const internsInfoArr = [];

  // keep asking questions unless user finishes building the team
  while (!isFinish) {
    const menuSelection = await getAnswers(MENU_OPTION_QUESTIONS);

    if (menuSelection.menuOption === MENU_CHOICES.addEngineer) {
      //get engineer information for creating an engineer in the team
      const engineerInfo = await getAnswers(ENGINEER_QUESTIONS);
      engineersInfoArr.push(engineerInfo);
    } else if (menuSelection.menuOption === MENU_CHOICES.addIntern) {
      //get intern information for creating an engineer in the team
      const internInfo = await getAnswers(INTERN_QUESTIONS);
      internsInfoArr.push(internInfo);
    } else {
      isFinish = true;
    }
  }

  console.log("managerInfo: ", managerInfo);
  console.log("engineersInfoArr:", engineersInfoArr);
  console.log("internsInfoArr: ", internsInfoArr);
}

promptQuetions();
