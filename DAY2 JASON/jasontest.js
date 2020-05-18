const file = require('fs');

const student = {"name":"jey","department":"ECE" , "Section" : "A","age":20} 


const jsonStr = JSON.stringify(student);

console.log('json object to string' , jsonStr);


const jsonstring = '{"name":"jey","department":"ECE" , "Section" : "A","age":20}'
const jasonobj = JSON.parse(jsonstring);
console.log('json string to object ' , jsonStr);

const studentarray = [{"name":"jey","department":"ECE" , "Section" : "A","age":20},{"name":"jey1","department":"ECE" , "Section" : "A","age":30} ]
const jsonarrayStr = JSON.stringify(studentarray);

console.log('json object array to string' , jsonarrayStr);


const students = file.readFileSync('student.json');
const jsonsyring = JSON.parse(jsonStr);

file.appendFileSync('student2.json', jsonStr)

console.log(jsonsyring);