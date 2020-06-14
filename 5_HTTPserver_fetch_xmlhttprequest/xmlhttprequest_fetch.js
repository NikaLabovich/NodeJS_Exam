var http = require('http');
var fs = require('fs');

http.createServer(function (request,response) {
    if (request.url==='/api/name')
    {
        response.writeHead(200, {'content-Type': 'text/plain; charset=utf-8'});
        response.end('Hello');
    }
    if (request.url==='/fetch') {
        let html = fs.readFileSync('./fetch.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }
    if (request.url==='/xmlhttprequest') {
        let html = fs.readFileSync('./xmlhttprequest.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }
}).listen(5000);

console.log('Server running at http://localhost:5000');
