let http = require('http');
let url = require('url');

let handler = (req, res)=>{
  if (req.method = 'GET'){
    let p = url.parse(req.url, true);
    let result = '';
    let q = url.parse(req.url, true).query;
    if(!(p.pathname == '/favicon.ico')){
      result = `href: ${p.href}<br/>` +
               `path: ${p.path}<br/>` +
               `pathname: ${p.pathname}<br/>` +
               `search: ${p.search}<br/>`;
      for(key in q) {result += `${key} = ${q[key]}<br/>`;}
    }
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>GET-params</h1>');
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
