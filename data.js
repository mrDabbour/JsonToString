
//JS Object
var data = {
    "name": "Mohammed Dabboor",
    "age":"22",
    "height":"175cm"
} 
console.log(data);
//JS JSON
const jsonData = JSON.stringify(data);
console.log(jsonData);
//JS Object
const udata = JSON.parse(jsonData);
console.log(udata);