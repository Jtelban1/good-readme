const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
    {
        message: "Enter your GitHub username",
        name: "username"
    },
    {
        message: "What's your project's name?",
        name: "project_name"
    },
    {
        message: "What license?",
        name: "license"
    }
];

inquirer
    .prompt(questions)
    .then(function (answers) {
        const queryUrl = `https://api.github.com/users/${answers.username}`;
        axios.get(queryUrl).then(res => {
            if(res.data.email){
                answers.email = res.data.email;
            }
            if(res.data.avatar_url){
                answers.avatar_url = res.data.avatar_url;
            }

            let template = templateApply(answers);
            writeToFile(template);
        });
    });


function writeToFile(data) {
    fs.writeFile(__dirname + '/test_README.md', data, function(err){
        if(err) throw err;
        process.exit();
    });
}


function templateApply(values){
    let template = fs.readFileSync(`${__dirname}/template/README.md`, 'utf8');
    let substitution;
    Object.keys(values).forEach(function(key){
        substitution = '{{'+ key + '}}';
        template = template.replace(substitution, values[key]);
    });
    return template;
}

