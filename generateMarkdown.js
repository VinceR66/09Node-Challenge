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

Github Username : ${data.projectGithub}`;

}

module.exports = generateMarkdown;





