// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateReadMe = ({ Title, Description, TableOfContents, Installation, Usage, License, Contributing, Tests, Questions}) =>
`# ${Title}

## ${Description}

## ${TableOfContents}

## ${Installation}

## ${Usage}

## ${License}

## ${Contributing}

## ${Tests}

## ${Questions}
`;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Write project description.'

  },
  {
    type: 'input',
    name: 'TableOfContents',
    message: 'List table of contents',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Enter notes on installation here',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Enter notes on usage here',
  },
  {
    type: 'input',
    name: 'License',
    message: 'Enter license information here',
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'How can other developers contribute to this project?',
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Enter any test information here',
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'Write questions section here',
  },
];

// TODO: Create a function to write README file

  inquirer.prompt(questions)
  .then((answers) => {
  const readMeInfo = generateReadMe(answers);

  fs.writeFile('readme.md', readMeInfo, (err) =>
    err ? console.log(err) : console.log('Success! Readme created.')
    );
  });
