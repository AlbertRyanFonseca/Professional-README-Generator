// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        type: 'input',
        name: 'Installation',
        message: 'Are there any installations required?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage information for this project?'
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Provide any contributors if there are any.',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'How do you test your project?'
    },
    {
        type: 'list',
        name: 'License',
        choices: ['Apache', 'SIL', 'GNUAGPLV3', 'ISC', 'MIT', 'N/A'],
        messge: 'Please select the type of license you will be using',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Provide your email for inquiries regarding your application.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => writeToFile('READMEGENERATED.md', generateMarkdown(data)))
}

// Function call to initialize app
init();
