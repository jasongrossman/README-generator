// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile, copyFile } = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title?",
            validate: projectInput => {
                if (projectInput) {
                  return true;
                } else {
                  console.log('A Project Name is required. Please enter it now.');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of your project here:"
        },
        {
            type: "input",
            name: "installation-instructions",
            message: "What are the installation instructions for your project?",
            validate: instructionInput => {
                if (instructionInput) {
                  return true;
                } else {
                  console.log('Without instructions, others may not be able to run your program. Please input instructions:');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "usage-information",
            message: "Please share relevant usage information here:"            
        },
        {
            type: "input",
            name: "contribution-guidelines",
            message: "Please share relevant usage guidelines for contributors:",
        },
        {
            type: "input",
            name: "test-instructions",
            message: "Please input test instructions here:"
        },
        {
            type: "checkbox",
            name: "license",
            message: "What license will you choose for your project?",
            choices: ["Academic Free License v3.0", "Apache", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0"]
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    console.log("Let's build a README file!");
}


// Function call to initialize app
init()
    .then(questions);
    