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
        message: "Please provide the URL of your deployed website.",
    },
    {
        type: 'input',
        name:'image',
        message: "Please provide an image link of your deployed website.",
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does a developer need to do to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do you want the user to know before using your application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'In what ways would you like other developers to contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run an automated test for your application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to assign your application?',
        choices: ['MIT', 'AGPL','GPL']
    },
    {
        type: 'input',
        name: 'questions1',
        message: 'What is your Github username so other developers can contact you with questions?',
    },
    {
        type: 'input',
        name: 'questions2',
        message: 'What is your email so other developers can contact you with questions?',
    }
]).then((response) => {
    console.log(response)
    let badge;
    if(response.license === 'MIT'){
        badge = '[![MIT](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)';
    }else if(response.license === 'AGPL'){
        badge = '[![AGPL](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)';
    }else if(response.license === 'GPL'){
        badge = '[![GPL](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)';
    }
    const data = `
# ${response.name}
${response.license}

# Table of Contents
* [License](#license)
* [Description](#description)
* [URL](#url)
* [Image](#image)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Description 
${response.description}

### URL
[Click here to see the live site!](${response.url})

### Image
![Screenshot Deployed Website](${response.image})

### Installation
${response.installation}

### Usage
${response.usage}

### Contributing
${response.contribution}

### Tests
${response.tests}

### Questions
Please contact me below with any questions you have about the appiction.
* Github: https://github.com/${response.questions1}
* Email: ${response.questions2}


    `
    fs.writeFile('README.md', data, (error) => {

        error ? console.error(error) : console.log('success!')
    })
})