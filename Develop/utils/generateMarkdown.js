
const questions = require('../../index');

let licenseLink = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = "Apache") {
   return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license = "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license = "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license = "Perl") {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  } else {
    return "";
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const chosenLicenseBadge = renderLicenseBadge(data.license); 
    console.log("badge URL", chosenLicenseBadge);
    return `# ${data.title}  
  # Table of Contents:
    1. [Project Description](#description:)
    2. [Instructions for Installation](#Instructions for Installation:)
    5. [Licensed By](#license)
  ${chosenLicenseBadge}
  # Project Description:  <a name="description"></a>
    ${data.description}
  # Instructions for Installation:  
    ${data.instructions}
  # Information on how to use the application:  
    ${data.usage}
  # Contribution Guidelines:  
    ${data.contribution}
  # For testing, follow these instructions:  
    ${data.testing}
  # Licensed by:  <a name = "license></a>
    ${data.license}
  # Questions:  
    Created by: ${data.username}  
    Link to github profile can be found at: github.com/${data.username}  
    please reach out to: ${data.email}
`;
}

module.exports = generateMarkdown;
