const { isValidString } = require("../utils/validation");
const Employee = require("./Employee");

// create an Engineer class that extends Employee class
class Engineer extends Employee {
  constructor(id, name, email, github) {
    if (
      isValidString(id) &&
      isValidString(name) &&
      isValidString(email) &&
      isValidString(github)
    ) {
      // invoke an Employee's constructor to bind the public fields
      super(id, name, email);
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
