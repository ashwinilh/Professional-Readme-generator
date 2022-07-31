// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// An array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?",
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project : ",
      },
      {
        type: "input",
        name: "github",
        message: "What is your github username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
          "MIT License",
          "Apache License 2.0",
          "GNU General Public License 3.0",
          "BSD 3 License",
          "None",
        ],
      },
      {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
      },
      {
        type: "input",
        name: "usage",
        message: "What is the usage information?",
      },
      {
        type: "input",
        name: "contributing",
        message:
          "What are the contribution guidelines?",
      }
    ];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), error => {
    
        console.log("Generating README...");
    
        if (error) throw error;
    
        console.log("README file Generated!");
      });
}

// A function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function (answers) {
      writeToFile("README.md", answers);
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Function call to initialize app
init();
