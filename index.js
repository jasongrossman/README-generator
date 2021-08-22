// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Input your GitHub username:",
            validate: username => {
                if (username) {
                  return true;
                } else {
                  console.log('Your GitHub username is required. Please enter it now.');
                  return false;
                }
              }
        },
        {
            tpye: "input",
            name: "email",
            message: "Please enter your email address",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Your email is required. Please enter it now.');
                    return false;
                }
                }
        },
        {
            type: "input",
            name: "title",
            message: "What is your project title?",
            validate: title => {
                if (title) {
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
            name: "instructions",
            message: "What are the installation instructions for your project?",
            validate: instructions => {
                if (instructions) {
                  return true;
                } else {
                  console.log('Without instructions, others may not be able to run your program. Please input instructions:');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "usage",
            message: "Please share relevant usage information here:"            
        },
        {
            type: "input",
            name: "contribution",
            message: "Please share relevant usage guidelines for contributors:",
        },
        {
            type: "input",
            name: "testing",
            message: "Please input test instructions here:"
        },
        {
            type: "checkbox",
            name: "license",
            message: "What license will you choose for your project?",
            choices: ["Apache", "MIT", "Mozilla Public License 2.0", "Perl"]
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, err => {
        if (err) throw err;
        console.log("file is written");
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log("Let's build a README file!");
    questions()
        .then(responses => {
            // console.log(responses);
            const markdown = generateMarkdown(responses);
            console.log(markdown);
            writeToFile("readme.md", markdown);
        });
}


// Function call to initialize app
init();

// module.exports = responses;