const Employee = require("./Employee");

// create a Manager class that extends Employee class
class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    // invoke an Employee's constructor to bind the public fields
    super(id, name, email);
    this.officeNumber = officeNumber;
  }

  // return the role of a manager
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
