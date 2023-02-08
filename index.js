
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    { type: 'input', message: 'What is the title of your read me?', name: 'title',},
    { type: 'input', message: 'What is the description for your project', name: 'description',},
    { type: 'input', message: 'What are the instillation instructions for this repo?', name: 'instillationinstructions',},
    { type: 'input', message: 'What is the usage information?', name: 'usageinformation',},
    { type: 'list', message: 'What liscence do you want?', name: 'liscence', choices: ['MIT', 'CC',],},
    { type: 'input', message: 'What are the contrubution guidelines?', name: 'contributing',},
    { type: 'input', message: 'What are the test instructions?', name: 'test',},
    { type: 'input', message: 'What is your Github Username',name: 'githubusername', },
    { type: 'input', message: 'What is your Email',name: 'email', },])
    .then(function(response){
        
        let content;
        content = '\n#'+ response.title + '\n\n' +
        '#### Table Of Contents \n* [Description](#description) \n* [Installiation](#installiation) \n* [Usage](#usage) \n* [License](#license) \n* [Contributing](#contributing) \n* [Tests](#tests) \n* [Questions](#questions) \n\n' +
        '### Description \n'+ response.description + '\n\n' +
        '### Installiation \n' + response.instillationinstructions  + '\n\n' +
        '### Usage \n' + response.usageinformation + '\n\n' +
        '### License \n' + response.liscence + '\n\n' +
        '### Contributing \n' + response.contributing + '\n\n' +
        '### Tests \n' + response.test + '\n\n' +
        '### Questions \n' + 'https://github.com/' + response.githubusername + '\n' + 'Email: ' + response.email + '\n'

        console.log(response.title);
        fs.writeFile('README.md', content, function(error, file){
            if (error) {console.log("Could not create file")}
            else {console.log("File created successfully")}
        });
    });
