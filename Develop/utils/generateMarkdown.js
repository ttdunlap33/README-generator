const licenseList = [
  {
    name: "GNU AGPLv3",
    badgeMD: " [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://choosealicense.com/licenses/agpl-3.0/)",
    url: "https://choosealicense.com/licenses/agpl-3.0/"
  },
  {
    name:  "GNU GPLv3",
    badgeMD: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)",
    url: "https://choosealicense.com/licenses/gpl-3.0/"
  },
  {
    name: "GNU LGPLv3",
    badgeMD: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://choosealicense.com/licenses/lgpl-3.0/)",
    url: "https://choosealicense.com/licenses/lgpl-3.0/"
  },
  {
    name: "Mozilla Public License 2.0",
    badgeMD: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://choosealicense.com/licenses/lgpl-3.0/)",
    url: "https://choosealicense.com/licenses/mpl-2.0/"
  },
  {
    name: "Apache License 2.0",
    badgeMD: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)",
    url: "https://choosealicense.com/licenses/apache-2.0/"
  },
  {
    name: "MIT License",
    badgeMD:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)',
    url: "https://choosealicense.com/licenses/mit/"
  },
  {
    name: "Boost Software License 1.0",
    badgeMD: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://choosealicense.com/licenses/bsl-1.0/)",
    url: "https://choosealicense.com/licenses/bsl-1.0/"
  },
  {
    name: "The Unlicense",
    badgeMD: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense/)",
    url: "https://choosealicense.com/licenses/unlicense/"
  }
];


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
      if (license) {
        const selectedLicenseList = licenseList.filter(item => item.name === license);
        return selectedLicenseList[0].badgeMD;
      }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
      const selectedLicenseList = licenseList.filter(item => item.name === license);
      return selectedLicenseList[0].url;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
      if (license)
      {
        return `${license}
      `;
      } else return ""
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("In Generate Markdown");
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.softwareLicense)}
  
  ## Table of Contents
  
  [Description](#description)  
  [Installation](#installation)
  [Usage](#usage)  
  [License](#license)  
  [Contributing](#contributing)  
  [Tests](#tests)  
  [Questions](#questions)  
  
  ## Description
  
  ${data.projectDescription}

  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.use}
  
  ## License
  
  This project uses the '${renderLicenseSection(data.softwareLicense)}' license. 
  
  More information can be found here: ${renderLicenseLink(data.softwareLicense)}
  
  ## Contributing
  
  ${data.contribute}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  Link to my Github: https://github.com/${data.username}

  Please send any questions here: ${data.email}
  `;
}

module.exports = generateMarkdown;
