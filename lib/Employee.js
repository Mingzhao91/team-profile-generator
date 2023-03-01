// create an Employee class
class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
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
