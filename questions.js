
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the name of your project?",
        name: "projectName",
        default: "README GENERATOR"
    },
    {
        type: 'input',
        message: "Please give a description of your project?",
        name: "projectDescription",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Briefly explain how to use project',
        name: 'projectUsage',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please explain how to use project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Please enter relative path to a screenshot",
        name: "projectScreenshot",
        default: "No Screenshots - see links provided"
    },
    {
        type: 'list',
        message: "Please choose project license",
        name: "projectLicense",
        choices: ['MIT', 'Apache', 'GNU', 'Eclipse'],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Please provide a link - if needed",
        name: "projectLink",
        default: 'No link provided'

    }
];


module.exports = {
    questions
}

// TODO: Create a function to write README file 
    //function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
    //function init() { }

// Function call to initialize app
    //init();     