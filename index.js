
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    { type: 'input', message: 'What is the title of your read me?', name: 'title',},
    { type: 'input', message: 'What is the description for your project', name: 'description',},
    { type: 'input', message: 'What are the instillation instructions for this repo?', name: 'instillationinstructions',},
    { type: 'input', message: 'What is the usage information?', name: 'usageinformation',},
    { type: 'input', message: 'What are the contrubution guidelines?', name: 'contrubution guidelines',},
    { type: 'input', message: 'What is your Github Username',name: 'githubusername', },
    { type: 'input', message: 'What is your Email',name: 'email', },])
    .then(function(response){
        let content;
        content = '\n# '+ response.title + '\n\n'+
        '## Description \n'+ response.description ;

        console.log(response.title);
        fs.writeFile('README.md', content, function(error, file){
            if (error) {console.log("Could not create file")}
            else {console.log("File created successfully")}
        });
    });
