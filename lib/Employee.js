// create an Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // return the name of an employee
  getName() {
    return this.name;
  }

  // return the Id of an employee
  getId() {
    return this.id;
  }

  // return the email of an employee
  getEmail() {
    return this.email;
  }

  // return the role of an employee
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
