const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const http=require('http');

let handler=(req,res)=>{
    if(req.method == 'GET'){
        res.writeHead(200,{'Content-type': 'text/html; charset=utf-8'});
        res.end(fs.readFileSync('./upload.html'));
    }
   else if(req.method == 'POST'){
        let result = '';
        req.on('data', data => {
            result += data; // convert Buffer to string
        });
        req.on('end', () => {
            res.writeHead(200,{'Content-type': 'text/html; charset=utf-8'});
            console.log(result);

            res.end(result);
        });
    }
}

let server = http.createServer();
server.listen(3000,(v)=>{console.log("http://localhost:3000/")})
.on('request', handler);
