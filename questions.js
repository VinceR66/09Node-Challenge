
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the name of your project?",
        name: "projectName",
        default: "README Generator"
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
        message: "Describe required installation",
        name: "projectInstall",
        default: 'none'
    },
    {
        type: 'input',
        message: "What is your Github Username?",
        name: "projectGithub",
        default: 'user.github'
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
        message: "Please provide a link to Repository",
        name: "projectLink",
        default: 'No link provided'

    },
    {
        type: 'input',
        message: "Please provide a url to Screencastify Video",
        name: "projectVideo",
        default: 'No link provided'
    },
    {
        type: 'input',
        message: "Please provide a contact email",
        name: "projectContact",
        default: 'info@me.com'
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