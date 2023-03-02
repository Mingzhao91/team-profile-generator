const { isString, isInteger } = require("../utils/validation");
const Employee = require("./Employee");

// create a Intern class that extends Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    if (
      isString(name) &&
      isInteger(id) &&
      isString(email) &&
      isString(school)
    ) {
      // invoke an Employee's constructor to bind the public fields
      super(name, id, email);
      this.school = school;
    } else {
      throw new Error("Values are invalid!");
    }
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
