// Requires the employee class in order to extend.
const Employee = require('./employee');

class Intern extends Employee {
	constructor (name, id, email, school){
		this.name = name;
		this.id = id;
		this.email = email;
		this.school = school;
	}
	getSchool(){

	}
	getRole(){
		return 'Intern';
	}
}

module.exports = Intern;
