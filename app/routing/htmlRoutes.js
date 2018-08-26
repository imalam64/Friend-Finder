var path = require('path');

//This should contain two routes:

module.exports = function(app) {
//1. A GET Route to /survey which should display the survey page.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

//2. A default, catch-all route that leads to home.html which displays the home page.
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
