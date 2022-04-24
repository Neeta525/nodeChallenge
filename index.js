// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const generateMarkdown = reuire('./utils/generatemarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for you project.',
        choices: ['MIT', 'Mozilla', 'WTFPL', 'Unlicense', 'ISC']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe the steps required to install your project.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Instructions and examples',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for others to contribute to your project.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for testing this project.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter a valid email address.',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Provide instructions on how to reach you with additional questions.',
      },
    ]);
  };

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  fs.writeFileSync( fileName, generate(data))
}

const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => writeFile("READMEtest.md", answers))
      .then(() => console.log('Successfully wrote to READMEtest.md'))
      .catch((err) => console.error(err));
  };

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
