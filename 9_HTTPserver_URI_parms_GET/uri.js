let http = require('http');
let url = require('url');

let handler = (req, res)=>{
  if (req.method = 'GET'){
    let p = url.parse(req.url, true);
    let result = '';
    if(!(p.pathname == '/favicon.ico')){
      result = `pathname: ${p.pathname}<br/>`;
      decodeURI(p.pathname).split('/').forEach(e => {result += `${e}<br/>`});
    }
    console.log(p.pathname.split('/'));
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>URL-params</h1>');
    res.end(result);
  }
  else{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.end('for other http-methods not so');
  }
}

let server = http.createServer();
  server.listen(3000, (v)=>{console.log('Server running at http://localhost:3000/')})
    .on('error', (e)=>{console.log('server.listen(3000): error: ', e.code)})
    .on('request', handler);
