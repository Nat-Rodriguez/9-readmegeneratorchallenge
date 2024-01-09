// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Give your project a unique name.',
    },    
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project. What, why, how?',
    },
    {
        type: 'input',
        name: 'technology',
        message: 'List the technologies used in your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instruct how to use your project with examples.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, third-party assets, or tutorials used.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a liscense for your project.',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'Mozilla Public License 2.0', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'The default command to run tests is npm test.',
        default: 'npm test',
      },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// Function call to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating your README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
};

init();
