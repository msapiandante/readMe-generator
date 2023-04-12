// TODO: Include packages needed for this application
const inquirer = require("inquirer");
//how did we install or link inquirer and fs? i know the above and below code starts it. how to finish? am i correct in that it's built in? 
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

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
      message: 'Write project description.'

    },
    {
      //should this be the "list" type? 
      type: 'input',
      title: 'Table of Contents',
      message: 'List table of contents',
    },
    {
      type: 'input',
      title: 'Installation',
      message: 'Enter notes on installation here',
    },
    {
      type: 'input',
      title: 'Usage',
      message: 'Enter notes on usage here',
    },
    {
      type: 'input',
      title: 'License',
      message: 'Enter license information here',
    },
    {
      type: 'input',
      title: 'Contributing',
      message: 'How can other developers contribute to this project?',
    },
    {
    type: 'input',
    title: 'Contributing',
    message: 'How can other developers contribute to this project?',
    },
    {
    type: 'input',
    title: 'Tests',
    message: 'Enter any test information here',
    },
    {
    type: 'input',
    title: 'Questions',
    message: 'Write questions section here',
    },
  ])

  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
  //when i enter github user name, it appends to Questions section of readMe file. 
  //when i enter email, it appends to questions section of readMe file. 
  