const Employee = require("./Employee");

class Manager extends Employee {
constructor(name, Id, email, officeNumber){
    super(name, Id, email);
    this.officeNumber = officeNumber;
    this.role = 'Manager'
}
    getofficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
