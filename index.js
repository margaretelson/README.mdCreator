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
        name:'url',
        message: "Please provide the url of your deployed website.",
    },
    {
        type: 'input',
        name:'image',
        message: "Please provide an image link of your deployed website.",
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does a developer need to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'I am so lost on this...',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'In what ways would you like other developers to request contributing to your project? Example: Github Fork/Clone/Pull, Email, etc.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run the automated tests for the system?',
    }
]).then((response) => {
    console.log(response)
    const data = `
## ${response.name}

## Description
${response.description}

## Url
[Click here to see the live site!](${response.url})

## Image
![Screenshot Deployed Website](${response.image})

## Installation
${response.installation}

## Usage
${response.usage}

## Contribution
${response.contribution}

## Tests
${response.tests}


    `
    fs.writeFile('README.md', data, (error) => {

        error ? console.error(error) : console.log('success!')
    })
})