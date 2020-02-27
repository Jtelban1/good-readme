const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
    {
        message: "what is your name",
        answer: "username"
    },
    {
        message: "What is your location",
        answer: "location"
    },
    {
        message: "Tell us about yourself?",
        answer: "bio"
    }

];

inquirer
    .prompt(questions)
    .then(function(answers) {
        const queryUrl = `https://api.github.com/users/${answers.username}`;
        axios.get(queryUrl).then(res => {
            console.log(res.data)
        });
    });



function writeToFile(fileName, data) {
}

function init() {

}

init();

