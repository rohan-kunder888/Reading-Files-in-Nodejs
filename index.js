var http = require("http");
var fs = require("fs");
var path = require("path");

// 1. reading text files from same directory.

http.createServer(function(req,res)
{   const files = './';
    fs.readdir(files,'utf-8',function(err,data){
        data.forEach(element => {
            console.log(element);    
            var filename = files + element;

            var extension = path.extname(filename)
            if(extension ===".txt"){
                fs.readFile(filename,'utf-8',function(err,data){
                    if (err) throw err;
                    else
                    console.log(data);
             });
            }
        });
    });
    console.log("listening at 1223");
}).listen(1223);



// 2. read files from another directory.

http.createServer(function(req,res)
{   const files = './test/';
    fs.readdir(files,'utf-8',function(err,data){
        data.forEach(element => {
            console.log(element);
            var filename = files + element;

            var extension = path.extname(filename)
            if(extension ===".txt"){
                fs.readFile(filename,'utf-8',function(err,data){
                    if (err) throw err;
                    else
                    console.log(data);
             });
            }
        });
    });
    console.log("listening at 1223");
}).listen(1223);