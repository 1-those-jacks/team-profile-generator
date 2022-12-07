const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./dist/generateHTML');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const questions = [
	{
		type: "input",
		name: "name",
		message: "What is their name?",
	},
	{
		type: "input",
		name: "id",
		message: "What is their ID?",
	},
	{
		type: "input",
		name: "email",
		message: "What is their email?",
	},
	{
		type: "list",
		name: "role",
		message: "What is their role?",
		choices: ["Manager", "Engineer", "Intern"],
	},
];

function writeToFile(fileName, data){
	fs.writeFile(fileName, generateHTML(data), function(error){
		if(error) {
			console.log("Could not write file.");
		} else {
			console.log("Success, new file created.")
		}
	})
}

function init() {
	return inquirer.prompt(questions)
		.then(data => {
			writeToFile("orgChart.html", data);
		});

}

init();
