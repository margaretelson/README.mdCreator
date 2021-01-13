/* Makes a page based on the info we put 
    npm init
1. Command line to get info = inquirer
2. Display
    1. Create index.js file
    2. We need fs
    3. .writeFile(filename, text, function that handles errors)
*/

const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your the name of your project?',
    },
    {
        type: 'input',
        name:'description',
        message: "Please provide a description of your project.",
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are some step by step instructions on how to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your fave tv show?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is your fave tv show?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run the automated tests for the system?',
    }
]).then((response) => {
    console.log(response)
    const data = `
##${resonse.name}

##Description
${response.description}

##Installation
${response.installation}

##Usage
${response.usage}

##Contribution
${response.contribution}

##Tests
${response.tests}


    `
    fs.writeFile('README.md', data, (error) => {

        error ? console.error(error) : console.log('success!')
    })
})