const Employee = require("./Employee");

// create an Engineer class that extends Employee class
class Engineer extends Employee {
  constructor(id, name, email, github) {
    // invoke an Employee's constructor to bind the public fields
    super(id, name, email);
    this.gethub = github;
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
