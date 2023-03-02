const { isString, isInteger } = require("../utils/validation");
const Employee = require("./Employee");

// create a Manager class that extends Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    if (
      isString(name) &&
      isInteger(id) &&
      isString(email) &&
      isInteger(officeNumber)
    ) {
      // invoke an Employee's constructor to bind the public fields
      super(name, id, email);
      this.officeNumber = officeNumber;
    } else {
      throw new Error("Values are invalid!");
    }
  }

  // return an office number of a manager
  getOfficeNumber() {
    return this.officeNumber;
  }

  // return the role of a manager
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
