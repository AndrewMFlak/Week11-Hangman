var fs = require("fs");
var inquirer = require('inquirer');


inquirer.prompt([{
    type: "list",
    name: "letterArray",
    message: "Choose a letter that is in your word?!",
    choices: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-"]
}]).then(function (answers) {
    var selection = console.log(JSON.stringify([answers, true]))
    var isChosen = true;
    console.log(selection, isChosen);
   
    // Use user feedback for... whatever!!
});


// module.exports = letter;