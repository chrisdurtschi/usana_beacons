var RecordModel = require("../models/recordmodel");

var appRouter = function(app) {
  app.get("/api/getAll", function(req, res) {
    RecordModel.getAll(function(error, result) {
      if(error) {
        return res.status(400).send(error);
      }
        res.send(result);
      });
  });
};

module.exports = appRouter;

