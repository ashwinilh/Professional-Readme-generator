// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeAndLink(license) {
  let licenseBadge = "";
  if(license === "None")
      licenseName = "This project has no license"; 
    else{
      licenseName = "This project is licensed under the "+license;
      
      switch(license){
        case "The MIT License" : 
        licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
          break;

        case "SIL Open Font License 1.1" : 
        licenseBadge = "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg";
          break;

        case "GNU General Public License 3.0" : 
        licenseBadge = "https://img.shields.io/badge/license-GPL%203.0-blue.svg";
          break;

        case "The Artistic License 2.0" : 
        licenseBadge = "https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg";
          break;

        case "Apache 2.0 License" : 
        licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
          break;

        case "Eclipse Public License" : 
        licenseBadge = "https://img.shields.io/badge/License-EPL_1.0-red.svg";
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
