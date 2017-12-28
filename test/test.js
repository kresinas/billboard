const assert = require('assert');
const code = require('../code/code');

fs = require('fs');

describe('code', function () {
    describe('#appendToMyFile(text)', function () {
        it('shall be equal', function (done) {
            code.initFile();
            var text = "aaa\n\n";
            fs.writeFile(code.file, "");

            code.appendToMyFile(text, function () {
                fs.readFile(code.file, function (err, data) {
                    assert.strictEqual(data.toString(), text, "we are equal");
                    done();
                })
            });
        });
    });

    describe('#parseBodyAndMakeAction(text)', function () {
        it('shall increase count', function (done) {
            code.initDBClient();
            var bodyWithCount = "{\n" +
                "  \"array\": [\n" +
                "    1,\n" +
                "    2,\n" +
                "    3\n" +
                "  ],\n" +
                "  \"boolean\": true,\n" +
                "  \"null\": null,\n" +
                "  \"number\": 123,\n" +
                "  \"object\": {\n" +
                "    \"a\": \"b\",\n" +
                "    \"c\": \"d\",\n" +
                "    \"e\": \"f\"\n" +
                "  },\n" +
                "  \"string\": \"Hello World\",\n" +
                "  \"count\": 8\n" +
                "}";
            code.parseBodyAndMakeAction(bodyWithCount, function () {
                code.client.get('count', function (err, reply) {
                    assert.equal("1", reply);
                    done();
                });
            });
        });
        it('shall not increase count', function (done) {
            code.initDBClient();
            var bodyWithCount = "{\n" +
                "  \"array\": [\n" +
                "    1,\n" +
                "    2,\n" +
                "    3\n" +
                "  ],\n" +
                "  \"boolean\": true,\n" +
                "  \"null\": null,\n" +
                "  \"number\": 123,\n" +
                "  \"object\": {\n" +
                "    \"a\": \"b\",\n" +
                "    \"c\": \"d\",\n" +
                "    \"e\": \"f\"\n" +
                "  },\n" +
                "  \"string\": \"Hello World\"\n" +
                "}";
            code.parseBodyAndMakeAction(bodyWithCount, function () {
                code.client.get('count', function (err, reply) {
                    assert.equal("0", reply);
                    done();
                });
            });
        });
    });
});

