var express = require('express');
var router = express.Router();

var code = require('../code/code');

router.post('/', function (req, res, next) {

    var stringBody = JSON.stringify(req.body);

    code.appendToMyFile(stringBody,
        code.parseBodyAndMakeAction(stringBody, function () {
            res.send(stringBody);
        }));
});

module.exports = router;