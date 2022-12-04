console.log("Good Luck");

const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');

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
