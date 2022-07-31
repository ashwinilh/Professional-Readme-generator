// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeAndLink(license) {
  let licenseBadge = "";
  if(license === "None")
      licenseName = "This project has no license"; 
    else{
      licenseName = "This project is licensed under the "+license;
      
      switch(license){
        case "MIT License" : 
        licenseBadge = "https://img.shields.io/badge/license-MIT-green";
          break;

        case "Apache License 2.0" : 
        licenseBadge = "https://img.shields.io/badge/license-Apache--2.0-blue";
          break;

        case "GNU General Public License 3.0" : 
        licenseBadge = "https://img.shields.io/badge/license-GPL%203.0-blue";
          break;

        case "BSD 3 License" : 
        licenseBadge = "https://img.shields.io/badge/license-BSD%203-green";
          break;

        default :
        licenseBadge = "";
      }
    }
  return licenseBadge;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = "";
  badge = renderLicenseBadgeAndLink(data.license);
  return `# ${data.title}
  ![Github License](${badge})

  # Description
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation
  To install necessary dependencies, run the following command : 
  <pre><code>${data.installation}</code></pre>

  # Usage
  ${data.usage}

  # License
  ${licenseName}.

  # Contributing
  ${data.contributing}

  # Tests
  To run tests, run the following command :
  <pre><code>${data.test}</code></pre>

  # Questions
  * If you have any questions about the repo, 
  [open an issue](https://github.com/${data.github}/${data.title}/issues/new) 
  or contact me directly at ${data.email}. 
  * You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
