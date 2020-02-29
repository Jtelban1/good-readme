function generateMarkdown(data) {
  return `
  
  
#  Project name: ${data.project_name}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions

If you have any questions, feel free to reach out to ${data.email}

![avatar](${data.avatar_url})




`;
}

module.exports = generateMarkdown;
