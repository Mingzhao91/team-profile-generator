const { isString, isInteger } = require("../utils/validation");
const Employee = require("./Employee");

// create an Engineer class that extends Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (
      isString(name) &&
      isInteger(id) &&
      isString(email) &&
      isString(github)
    ) {
      // invoke an Employee's constructor to bind the public fields
      super(name, id, email);
      this.github = github;
    } else {
      throw new Error("Values are invalid!");
    }
  }

  // return the github username of an engineer
  getGithub() {
    return this.github;
  }

  // return the role of an engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
