
const questions = require('../../index');
let licenseBadge = "";
let licenseLink = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    console.log("");
  } else if (license === "Academic Free License v3.0") {
    licenseBadge = "https://opensource.org/files/osi_standard_logo_0.png"
    console.log("Academic");
  } else if (license === "Apache") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    console.log("Apache"); 
  } else if (license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    console.log("MIT");
  } else if (license === "Mozilla Public License 2.0") {
    licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    console.log ("Mozilla Public License 2.0"); 
  } else if (license === "Perl") {
    licenseBadge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    console.log ("Perl");
  }
}

renderLicenseBadge();
console.log(licenseBadge);
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
  return `# ${data.title}  
  ![License logo](${licenseBadge})
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
    please reach out to: ${data.email}
`;
}

module.exports = generateMarkdown;
