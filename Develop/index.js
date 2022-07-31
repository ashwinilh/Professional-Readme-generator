// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// An array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project :",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project : ",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username :",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address :",
    },
    {
        type: "list",
        message: "Select the license for your project :",
        name: "license",
        choices: [
            "The MIT License",
            "SIL Open Font License 1.1",
            "GNU General Public License 3.0",
            "The Artistic License 2.0",
            "Apache 2.0 License",
            "Eclipse Public License",
            "None",
        ],
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the command for installing yor project :",
    },
    {
        type: "input",
        name: "test",
        message: "Enter command to run tests on your project :",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter any usage information for the project :",
    },
    {
        type: "input",
        name: "contributing",
        message:
            "Enter the contribution guidelines for the project :",
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
    console.log("Answer the promts to genetare README file for your proejct");
    console.log("-----------------------------------------------------------");
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
