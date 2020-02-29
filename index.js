const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
    },
    {
        message: "Describe your project",
        name: "description"
    },
    {
        message: "What is your email?",
        name: "email"
    },
    {
        message: "Your contribution message",
        name: "contribution"
    },
    {
        message: "What do you want to say about testing",
        name: "tests"
    },
    {
        message: "How do you install your app?",
        name: "installation"
    },
    {
        message: "How to use your project",
        name: "usage"
    },
    {
        message: "What should this README be called?",
        name: "fileName",
        default: "README"
    }
];

inquirer
    .prompt(questions)
    .then(function (answers) {
        const queryUrl = `https://api.github.com/users/${answers.username}`;
        axios.get(queryUrl).then(res => {
            if(res.data.avatar_url){
                answers.avatar_url = res.data.avatar_url;
            }

            let template = generateMarkdown(answers);
            writeToFile(answers.fileName, template);
        });
    });


function writeToFile(filename, data) {
    fs.writeFile(__dirname + '/'+filename+'.md', data, function(err){
        if(err) throw err;
        process.exit();
    });
}

