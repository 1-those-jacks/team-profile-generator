// Requires the employee class in order to extend.
const Employee = require('./employee');

class Engineer extends Employee {
	constructor (name, id, email, github) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.github = github;
	}
	getRole(){
		return 'Engineer';
	}
	getGithub(){

	}
}

module.exports = Engineer;
