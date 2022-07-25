const inquirer = require("inquirer");
const fs = require("fs");
const generatemarkDown = require("./utils/generatemarkDown");

//questions for the application

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        ("Please enter a value");
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Can you describe about your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your project usage?",
  },
  {
    type: "input",
    name: "installation",
    message: "Let us know about the installation instructions.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide the contribution information?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github id?",
  },
  {
    type: "list",
    name: "license",
    message: "License info?",
    choices: ["BSD", "MIT", "GPL"],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

//

// Create a function to write README file
function writeToFile() {
  return inquirer.prompt(questions).then((answers) => {
    console.log("Answers: ", answers);
    let answerObject = answers;
    console.log(answerObject);

    answerObject = generatemarkDown(answerObject);
    fs.writeFile("./Readme.md", answerObject, (err) => {
      if (err) throw err;

      console.log("Success! Your README.md file has been generated");
    });
  });
}

//Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
