var uuid = require("uuid");
var db = require("../app").bucket;
var config = require("../config");
var ViewQuery = require('couchbase').ViewQuery;

function RecordModel() { };

module.exports = RecordModel;

RecordModel.getAll = function(callback) {
  var query = ViewQuery.from('beacons', 'newestBeaconPings');
  db.query(query, function(error, result) {
    if(error) {
      return callback(error, null);
    }
    callback(null, result);
  });
};

