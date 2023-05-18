// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }



// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

    return `# ${data.projectName}  
 
    
![Screenshot](./${data.projectLicense}.png)  

_________________________________________________________________________
## Description 
${data.projectDescription}  

_________________________________________________________________________
## Table of Contents:

Installation

Usage

License

Links

Questions  


_________________________________________________________________________
## Installation 
${data.projectInstall}  

_________________________________________________________________________
## Usage 
${data.projectUsage}  

_________________________________________________________________________
## License :  ${data.projectLicense}  

_________________________________________________________________________
## Links:
Repository:  ${data.projectLink}  

Screencastify:  ${data.projectVideo}   

_________________________________________________________________________
### Questions : 
Please contact me at ${data.projectContact} with additional questions.  

${data.projectGithub}  

_________________________________________________________________________
## Screenshot   
![Screenshot](${data.projectScreenshot}.png)`;

}

module.exports = generateMarkdown;





