let http=require('http');
let url = require('url');
const fs = require('fs');

let server = http.createServer(function(request,response){
    const picPath = 'vidra.png';
    if (request.url === "/png") {
        fs.stat(picPath, (err, stat) => {
            if (err) { console.log('error:' + err.message); }
            else {
                png = fs.readFile(picPath, (err, data) => {
                   response.contentType = 'image/png';
                    response.contentLength = stat.size;
                    response.end(data);
                });
            }
        })
    }
})

server.listen(3000,(v)=>{console.log("http://localhost:3000/")})
