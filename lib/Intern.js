const Employee = require("./Employee");

// create a Intern class that extends Employee class
class Intern extends Employee {
  constructor(id, name, email, school) {
    // invoke an Employee's constructor to bind the public fields
    super(id, name, email);
    this.school = school;
  }

  // return the school of an intern
  getSchool() {
    return this.school;
  }

  // return the role of an intern
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
