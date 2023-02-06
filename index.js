
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    { type: 'input', message: 'What is the title of your read me?', name: 'title',},
    { type: 'input', message: 'What is the description for your project', name: 'description',},
    { type: 'input', message: 'What are the instillation instructions for this repo?', name: 'instillationinstructions',},
    { type: 'input', message: 'What is the usage information?', name: 'usageinformation',},
    { type: 'input', message: 'What are the contrubution guidelines?', name: 'contrubution guidelines',},
    { type: 'input', message: 'What are the test instructions?', name: 'testinstructions',},
    { type: 'input', message: 'What is your Github Username',name: 'githubusername', },
    { type: 'input', message: 'What is your Email',name: 'email', },])
    .then(function(response){
        let content;
        content = '\n# '+ response.title + '\n\n'+
        '## Description \n'+ response.description +'\n\n'+
        '##### Table Of Contents\n[Description](#Description)\n[Installiation](#Installiation)\n[Usage](#Usage)\n' +
        '[License](#License)\n[Contributing](#Contributing)\n[Tests](#Tests)\n[Questions](#Questions)\n'+

        '##Questions\n' + 'https://github.com/' + response.githubusername + '\nEmail: ' + response.email

        console.log(response.title);
        fs.writeFile('README.md', content, function(error, file){
            if (error) {console.log("Could not create file")}
            else {console.log("File created successfully")}
        });
    });
