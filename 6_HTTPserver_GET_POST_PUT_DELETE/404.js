var http = require('http');

let debug_handler = (req, res)=>{
  console.log(req.method, req.url);
  res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
  res.end(`{"${req.method}":"${req.url}"}`);
}

let HTTP404 = (req, res)=>{
  console.log(`${req.method}: ${req.url}, HTTP status 404`);
  res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
  res.end(`{"error: ${req.method}: ${req.url}, HTTP status 404"}`);
};

let GET_handler = (req, res)=>{debug_handler(req,res)};
let POST_handler = (req, res)=>{debug_handler(req,res)};
let PUT_handler = (req, res)=>{debug_handler(req,res)};
let DELETE_handler = (req, res)=>{debug_handler(req,res)};
let OTHER_handler = (req, res)=>{debug_handler(req,res)};

let http_handler = (req, res)=>{
  switch (req.method) {
    case 'GET': GET_handler(req,res); break;
    case 'POST': POST_handler(req,res); break;
    case 'PUT': PUT_handler(req,res); break;
    case 'DELETE': DELETE_handler(req,res); break;
    default: HTTP404(req, res); break;
  }
};

let server = http.createServer();
  server.listen(3000, (v)=>{console.log('Server running at http://localhost:3000/')})
    .on('error', (e)=>{console.log('server.listen(3000): error: ', e.code)})
    .on('request', http_handler);
