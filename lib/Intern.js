const Employee = require("./Employee");

class Intern extends Employee {
constructor(name, Id, Email, School){
    super(name, Id, Email);
    this.School = School;
    this.role = this.getRole();
}
    getSchool(){
        return this.School;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;
