//Your apiRoutes.js file should contain two routes:

var friends = require('../data/friends.js');

module.exports = function(app){

//1. A GET route with the url /api/friends. This will be used 
//to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

//2. A POST routes /api/friends. This will be used to handle incoming 
//survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends", function(req, res) {
    return res.json(friends);
});
};