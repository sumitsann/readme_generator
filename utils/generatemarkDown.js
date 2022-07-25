function generatemarkDown(answers) {
  return `
  # ${answers.title}
  
  ## Description
  ${answers.description}

  ## Table of contents
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Contribution](#Contribution)
  -[License](#License)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}
  
  ## Contribution
  ${answers.contribution}

  ## License
  ${answers.license}

  ## Tests
  ${answers.tests}

  
  ## Questions
  ${answers.email}
  ${answers.github}

   
  `;
}
module.exports = generatemarkDown;
