// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
     {
        type: 'input',
        name: 'projectTitle',
        message: '* Please provide the title of your project:',
        // Required
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please provide the title of your project');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: '* Provide a brief description of your project:',
        //Required
        validate: description => {
            if (description) {
              return true;
            } else {
              console.log('Please provide a brief description of your project:');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: "* Provide the command to install your project:",
         //Required
         validate: installationCmnd => {
            if (installationCmnd) {
              return true;
            } else {
              console.log("Provide the command to install your project:");
              return false;
            }
        }
    },  
    {
        type: 'input',
        name: 'use',
        message: "* Provide instructions to use the project:",
         //Required
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log("Provide instructions to use the project:");
                return false;
            }
        }
    }, 
    {
        type: 'list',
        name: 'softwareLicense',
        message: "* Choose the license for the project:",
        // https://choosealicense.com/licenses/
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "The Unlicense"
        ]
    },
    {
        type: 'input',
        name: 'contribute',
        message: "How can this project be contributed to?"
        // Optional
        
    },
     {
        type: 'input',
        name: 'tests',
        message: "Mention any tests written to test the project:"
        // Optional
    },
    {
        type: 'input',
        name: 'username',
        message: "* Provide your github username:",
        //Required
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log('Please enter your github username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "* Enter your email address:",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter the email address');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('Success! README.md file is created in the output folder');
//     });
// }

// TODO: Create a function to initialize app
function init() {
console.log("Please answer the prompts. Required questions start with a '*'");
    inquirer
    .prompt(questions)
    .then(answers => {
        var readmeContent = generateMarkdown(answers);
        console.log(readmeContent);
        fs.writeFile('./newreadme/README.md', readmeContent, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log('README.md written to newreadme/README.md');
        })
        // console.log(answers);
    //    writeToFile('./output/README.md', readmeContent);
    })
    .catch(error => {
        if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else when wrong
        }
    });
}

// Function call to initialize app
init();
