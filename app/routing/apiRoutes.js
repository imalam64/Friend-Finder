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
    var newFriend = req.body;
    var userResponses = newFriend.scores;

    var matchName = '';
    var matchImage = '';
    var totalDifference = 10000;

    for (var i = 0; i < friends.length; i++) {
        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
            diff += Math.abs(friends[i].scores[j] - userResponses[j]);
        }
        
        if (diff < totalDifference) {
            console.log('Closest match found = ' + diff);
            console.log('Friend name = ' + friends[i].name);
            console.log('Friend image = ' + friends[i].photo);
            totalDifference = diff;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
    }}
    friends.push(newFriend);
    res.json({status: 'OK', name: matchName, photo: matchImage});
});
};