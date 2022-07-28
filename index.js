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
    name: "installation",
    message: "Let us know about the installation steps.",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your project usage?",
  },

  {
    type: "input",
    name: "contribution",
    message: "Please provide the collaborators information.",
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
  {
    type: "input",
    name: "tests",
    message: "Please write the test scrips.",
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
    fs.writeFile("./readme/README.md", answerObject, (err) => {
      if (err) throw err;

      console.log(
        "Success! Your README.md file has been generated inside the readme folder"
      );
    });
  });
}

//Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
