
const fs = require('fs');
const { questions } = require("./questions");
const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown.js');

function askQuestions() {
    inquirer.prompt(questions).then(function (answers) {
        console.log(answers);

        return generateMarkdown(answers);
    })

        .then(data => {
            return writeFile(data);
        })
}


function main() {
    console.log(questions);
    askQuestions();
}

main();


const writeFile = data => {
    fs.writeFile('README.md', data, err => {

        if (err) {
            console.log(err);
            return;

        } else {
            console.log("Your README has been successfully created!")
        }
    })

};



