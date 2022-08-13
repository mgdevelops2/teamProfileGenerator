const Employee = require("./Employee");

class Engineer extends Employee {
constructor(name, Id, email, GitHub){
    super(name, Id, email);
    this.GitHub = GitHub;
    this.role = this.getRole();
}
    getGitHub(){
        return this.GitHub;
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;
