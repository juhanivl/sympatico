
//basic javascript module export launched from toures
module.exports = function (app) {
  var teams = require('../app/controllers/teams');
       app.get('/teams', teams.list);
       app.put('/teams/:id', teams.update);
}
