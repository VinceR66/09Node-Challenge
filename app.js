
const fs = require('fs');
const { questions } = require("./questions");
const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown.js');

function askQuestions() {
    inquirer.prompt(questions).then(function (answers) {
        console.log(answers);
        //new below
        return generateMarkdown(answers);
    })
        //new below
        .then(data => {
            return writeFile(data);
        })
}


function main() {
    console.log(questions);
    askQuestions();
}

main();

//new below
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if error 
        if (err) {
            console.log(err);
            return;
            //README created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })

};



//(http://img.shields.io/badge/license-${data.license}-blue.svg)