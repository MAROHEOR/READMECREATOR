// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input

const questions =

    console.log("\n***\n Welcome to ReadMe generator! \nType your response to each prompt and press enter to submit. \nYour ReadMe will be generated once all questions have been answered and saved as: \n'Your-Project-Title.md'\n***\n")

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your README?",
            name: "title",
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter a title")
                }
            }

        },
        {
            type: "input",
            message: "Please provide description for your README file",
            name: "description",
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter a description")
                }
            }
        },
        {
            type: "input",
            message: "Please provide instalation instructions for your README file",
            name: "instalation",
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter installation instructions")
                }
            }

        },
        {
            type: "input",
            message: "Please provide usage information for your README file",
            name: "uinformation",
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter usage information")
                }
            }

        },
        {
            type: "input",
            message: "Please provide guidelines for your README file",
            name: "guidelines",
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter guidelines")
                }
            }
        },
        {
            type: "input",
            message: "Please provide test instructions for your README file",
            name: "tinstructions",
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter test instructions information")
                }
            }
        },
        {
            type: "list",
            message: "Which licence are you using?",
            name: "licence",
            choices: [
                "Apache License 2.0",
                "Boost Software License 1.0",
                "BSD 2-Clause Simplified License",
                "BSD 3-Clause Revised License",
                "Creative Commons Zero V1.0 Universal",
                "Creative Commons Attribution 4.0",
                "Creative Commons Attribution Share Alike 4.0",
                "Creative Commons Attribution NonCommercial 4.0 International",
                "Creative Commons Attribution NoDerivitaves 4.0 International",
                "Creative Commons Attribution NonCommmercial-ShareAlike 4.0 International",
                "Creative Commons Attribution NonCommercial-NoDerivitaves 4.0 International",
                "Eclipse Public License 1.0",
                "GNU GPL V3",
                "GNU GPL V2",
                "GNP AGPL V3",
                "GNU LGPL V3",
                "GNU FL V1.3",
                "The Hippocratic License 2.1",
                "The Hippocratic License 3.0",
                "IBM Public License Version 1.0",
                "ISC License",
                "The MIT License",
                "Mozilla Public License 2.0",
                "Attribution License (BY)",
                "Open Database License (ODbL)",
                "Public Domain Dedication and License (PDDL)",
                "The Perl License",
                "The Artistic License 2.0",
                "SIL Open Font License 1.1",
                "The Unlicense",
                "The Do What The Fuck You Want To Public License (WTFPL)",
                "Zlib"
            ]
        },
        {
            type: "input",
            message: "Github Username:",
            name: "github",
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter your GitHub information")
                }
            }
        },
        {
            type: "input",
            message: "Email:",
            name: "email",
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter your email address")
                }
            }
        },


    ])

    .then((r) => {

        var badge = `${r.license}`.split(" ").join("-")
        var docTitle = `${r.title}`.split(" ").join("-")
        const readMeTemplate = `

# Title  
${r.title}

        ![License Badge](https://raw.githubusercontent.com/cfoster121/readme-cli/main/assets/images/${badge}.png)  

## Description   
${r.description}    

### Table Of Contents
        * [Installation](#Installation)
        * [Usage](#Usage)
        * [License](#License)
        * [Contributing](#Contributing)
        * [Tests](#Tests)
        * [Questions](#Questions)
    
    
## Installation  
${r.installation}  
    
## Usage  
${r.uinformation}  

## Guidelines 
${r.guidelines} 

## Test Instructions 
${r.tinstructions} 
     
## License   
${r.license} 
          
    
## Questions ?

            Contact me via:  
* [GitHub](https://github.com/${r.github})  
* [Email](mailto: ${ r.email })
                    
`


        fs.writeFile(docTitle+".md", readMeTemplate, function (err) {
            if (err) throw err;
            console.log('Saved');
        })
    })

