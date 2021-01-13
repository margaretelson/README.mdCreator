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
        name:'name',
        message: "What is your name?",
    },
    {
        type: 'input',
        name: 'tvShow',
        message: 'What is your fave tv show?',
    }
]).then((response) => {
    // console.log(response)
    const data = `
##README
    `
    fs.writeFile('index.html', data, (error) => {

        error ? console.error(error) : console.log('success!')
    })
})