const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./dist/generateHTML.js');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamData = [];

const questions = async () => {
	const answers = await inquirer.prompt([
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
])

if (answers.role === "Manager") {
	const managerInfo = await inquirer.prompt([
		{
			type: "input",
			message: "What is their office number?",
			name: "officeNum",
		},
	])
	const addManager = new Manager(
		answers.name,
		answers.id,
		answers.email,
		managerInfo.officeNum
	);
	teamData.push(addManager);
} else if (answers.role === "Engineer") {
	const gitHubInfo = await inquirer.prompt([
		{
			type: "input",
			message: "What is their GitHub username?",
			name: "github",
		},
	])
		const addEngineer = new Engineer(
			answers.name,
			answers.id,
			answers.email,
			gitHubInfo.github
		);
		teamData.push(addEngineer);
} else if (answers.role === "Intern") {
	const internInfo = await inquirer.prompt([
		{
			type: "input",
			message: "What school did they attend?",
			name: "school",
		},
	])
		const addIntern = new Intern(
			answers.name,
			answers.id,
			answers.email,
			internInfo.school
	);
	teamData.push(addIntern)
}
};

async function init() {
	await questions()
	const addRole = await inquirer.prompt([
		{
			type: "list",
			message: "Next Actions:",
			choices: ["Add Role", "Create Org Chart"],
			name: "nextAction"
		}
	])

	if (addRole.nextAction === "Add Role") {
		return init()
	} return writeToFile();
}

function writeToFile(){
	// console.log(teamData);
	fs.writeFileSync("orgChart.html", generateHTML(teamData), 'utf-8')
}

init();
