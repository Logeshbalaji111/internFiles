var express = require('express');
var app = express();


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })
 
 app.get('/whoiam/:name', function (req, res) {
    // First read existing users.

    var name = req.params.name;
        var output;
       console.log( name );
       if (name == 'jey') {
           output = name + " is NEC Alumni" ;
       } else {
         output = name + " is current student" ;
       }
       res.end( JSON.stringify(output));
    });
