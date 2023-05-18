
const fs = require('fs');

const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown.js');
const { questions } = require("./questions");
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



