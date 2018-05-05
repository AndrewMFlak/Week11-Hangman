var fs = require("fs");
var UserSearch = require("./letter.js");

var Word = function () {
    this.getData = function () {
        fs.readFile("log.txt", "utf8",
            function (error, data) {
                console.log(data);
            });
    };
};

this.newLetter = function(name, answers) {
    var newLetter = new newLetter(name, answers);
    var logTxt = 
    "\nName: " +
    newLetter.name +
    "\answers: " + 
    newLetter.answers

    fs.appendFile("log.txt", logTxt, function(err) {
        if (err) throw err;
    });

    newLetter.answers();
};

module.exports = word;
