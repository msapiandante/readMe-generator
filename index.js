// TODO: Include packages needed for this application
const inquirer = require("inquirer");
//do I need fs for the challenge? I think so because it's a libarary... will follow up.  
//how did we install or link inquirer and fs? i know the above and below code starts it. how to finish? 
const fs = require('fs'); 

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      title: 'description',
      message: 'Enter project description.'
       "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"],
    },
    {
        type: 'input',
        title: 'Table of Contents',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        title: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        title: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        title: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        title: 'title',
        message: 'What is your project title?',
      },
    
    
    'email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
​
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });