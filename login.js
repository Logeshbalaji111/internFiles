const express = require('express');
var mysql = require('mysql');
const bodyParser=require('body-parser');
//var  fs= require("fs");
//const upload = require('express-fileupload');
//const global = require('./signup');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'logesh',
  database: 'nec',
});


const app = express();

app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/home.html')
    })


app.get('/login',(req,res) =>{
res.sendFile(__dirname+'/login.html')
})
var count;
app.post('/login',(req,res)=>{   
         let flag=0;    
         var userName = req.body.username;
         var password  = req.body.password;
         var fileInsertSQL = "select count(*) as total from nec.table where username=?";
        connection.query(fileInsertSQL,[userName],function (err, result){ 
            count =result[0].total;
            if(count===0)
            {
              
               // console.log("in if condition")
               // app.get('/login/signup',(req,res) =>{
                    res.sendFile(__dirname+'/signuphtml.html')
                   //   });
                  
                  app.post('/login/signup',(req,res)=>{
                    var mailid = req.body.mail;
                    var password  = req.body.password;
                    var confirmPassword = req.body.confirmPassword;
                    var count1;
                    if(password!=confirmPassword){
                      res.send("<br><br><br><dialog open>Password is incorrect</dialog>")
                    }       
                    
                   else
                    {
                        var fileInsertSQL2 = "insert into nec.table values(?,?,?)";
                        connection.query(fileInsertSQL2,[mailid,password,null],function (err, result){
                        res.send("<br><br><br><dialog open>SignUp Success :-)</dialog>")  
                       })
                    }
                 })
    
            }
            else
            {
                var fileInsertSQL2 = "select password as pw from nec.table where username=?";
                connection.query(fileInsertSQL2,[userName],function (err,result){
                        if(err) throw err;
                        pass=result[0].pw;
                        if(pass===password)
                        {
                            res.send("<br><br><br><dialog open>Welcome ! ! !</dialog>")  
                        }
                        else
                        {
                            res.send("<br><br><br><dialog open>Check Your Password</dialog>")  
                        }
                     })

            }
    })
})
app.get('/login/signup',(req,res) =>{
  res.sendFile(__dirname+'/signuphtml.html')
     });
 
 app.post('/login/signup',(req,res)=>{
   var mailid = req.body.mail;
   var password  = req.body.password;
   var confirmPassword = req.body.confirmPassword;
   var count1;
   if(password!=confirmPassword){
     res.send("<br><br><br><dialog open>Password is incorrect</dialog>")
   }       
   
  else
   {
       var fileInsertSQL2 = "insert into nec.table values(?,?,?)";
       connection.query(fileInsertSQL2,[mailid,password,null],function (err, result){
       res.send("<br><br><br><dialog open>SignUp Success :-)</dialog>")  
      })
   }
})
app.listen(8100);