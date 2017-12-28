var fs = require('fs');
var os = require('os');
var path = require('path');
var redis = require('redis');
const filename = 'billboard';

exports.dbKey = 'count';

exports.parseBodyAndMakeAction = function (body, callback) {
    if (body.indexOf("count", function (err) {
            if (err) {
                return console.log(err);
            }
        }) > -1) {
        exports.client.incr(exports.dbKey, function (err) {
            if (err) {
                return console.log(err);
            }
            exports.client.get(exports.dbKey, function (err, reply) {
                if (err) {
                    console.log(err);
                }
                console.log("count: " + reply);
            });
        });
    }
    if (typeof(callback) == 'function') {
        callback();
    }
}

exports.appendToMyFile = function (body, callback) {
    fs.appendFile(exports.file, body, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    if (typeof(callback) == 'function') {
        callback();
    }
}


exports.initFile = function () {
   exports.file = os.tmpdir()+path.sep+filename;
   console.log('File to be saved into: ' + exports.file);
}

exports.initDBClient = function () {
    exports.client = redis.createClient();
    exports.client.on('connect', function () {
        console.log('DB client connected to default port (6379) on localhost');
    }).set(exports.dbKey, 0);
}



