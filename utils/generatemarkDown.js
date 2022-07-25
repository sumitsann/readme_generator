function generatemarkDown(answers) {
  return `
  # ${answers.title}
  
  ## Table of content
  -[Project Description](#Descrtiption)
  -[Usage](#Usage)
  -[Contribution](#Contribution)
  -[Installation](#Installation)
  -[Questions](#Questions)
  -[License](#License)
  ## Description
  ${answers.description}
  ## Usage
  ${answers.usage}
  ## Installation
  ${answers.installation}
  ## Contribution
  ${answers.contribution}
  ## Questions
  ${answers.email}
  ${answers.github}
  ## License
  ${answers.license}
   
  `;
}
module.exports = generatemarkDown;
