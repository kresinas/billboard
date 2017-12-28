var express = require('express');
var router = express.Router();

var code = require('../code/code');

router.get('/', function(req, res, next) {
    code.client.get('count', function(err, reply) {
        console.log("count: " +reply);
        res.send("count: " +reply);
    });
});

module.exports = router;