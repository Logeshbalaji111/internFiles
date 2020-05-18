var express = require('express');
var app = express();

var body_parser = require('body-parser');

app.use(body_parser.json());


var file = require('fs');

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
    
app.get('/student',function(req,res){

  const data = file.readFileSync('student.json');
  const dataStr = JSON.parse(data);
  res.end( JSON.stringify(dataStr));

});

app.post('/add',function(req,res){

  const student  = req.body;
  console.log('Adding new student: ', student);

  res.end( JSON.stringify("stiudents updated successfully"));

});