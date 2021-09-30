// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a description of your project',
    },
    {
        type: 'checkbox',
        name: 'Contents',
        choices: ['Title', 'Description', 'Table of Contents', 'Installations', 'Usage', 'License', 'Contributors', 'Testing', 'GitHub Repo', 'Email for question inquiries'],
        message: 'Please select the bullet points you would like in the Table of Contents',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Are there any installations required?',
    },
    {
        type: 'list',
        name: 'License',
        choices: ['Apache License 2.0', 'MIT License'],
        messge: 'Please select the type of license you will be using',
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Provide any contributors if there are any.',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Provide your GitHub username',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Provide your email for inquiries regarding your application',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
