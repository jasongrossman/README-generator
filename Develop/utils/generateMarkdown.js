
const questions = require('../../index');
let licenseBadge = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    console.log("");
  } else if (license === "Academic Free License v3.0") {
    licenseBadge = "https://opensource.org/logo-usage-guidelines#The_Standard_Logo"
    console.log("Academic");
  } else if (license === "Apache") {
    console.log("Apache"); 
  } else if (license === "MIT") {
    console.log("MIT");
  } else if (license === "Mozilla Public License 2.0") {
    console.log ("Mozilla Public License 2.0"); 
  } else if (license === "Open Software License 3.0") {
    console.log ("Open Software License 3.0");
  }
}

renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${licenseBadge}
  # Project Description:  
    ${data.description}
  # Instructions for Installation:  
    ${data.instructions}
  # Information on how to use the application:  
    ${data.usage}
  # Contribution Guidelines:  
    ${data.contribution}
  # For testing, follow these instructions:  
    ${data.testing}
  # Licensed by:  
    ${data.license}
  # Questions:  
    Created by: ${data.username}  
    Link to github profile can be found at: github.com/${data.username}  
    please reach out to:   ${data.email}
`;
}

module.exports = generateMarkdown;
