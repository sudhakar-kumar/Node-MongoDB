// Read XML file

var fs = require('fs'),
    xml2js = require('xml2js'); // Tab space should be maintained !

var path = require('path');
var parser = new xml2js.Parser();

fs.readFile(path.join(__dirname,'someRandom.xml'), function(err, data) {    
    parser.parseString(data, function (err, result) {
        console.log(result);
        console.log(result.feedthisdata.data1);
        console.log('Done');
    });
});
