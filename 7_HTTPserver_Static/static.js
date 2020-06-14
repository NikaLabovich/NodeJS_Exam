let http = require('http');
let stat = require('./m6')('./static');

let http_handler = (req, res)=>{
  if (stat.isStatic('html', req.url)) stat.sendFile(req, res, { "Content-Type": "text/html; charset=utf-8;" });
  else if (stat.isStatic('css', req.url)) stat.sendFile(req, res, { "Content-Type": "text/css; charset=utf-8;" });
  else if (stat.isStatic('js', req.url)) stat.sendFile(req, res, { "Content-Type": "text/javascript; charset=utf-8;" });
  else if (stat.isStatic('docx', req.url)) stat.sendFile(req, res, { "Content-Type": "application/msword" });
  else if (stat.isStatic('png', req.url)) stat.sendFile(req, res, { "Content-Type": "image/png" });
  else stat.writeHTTP404(req, res);
};

let server = http.createServer();
  server.listen(3000, (v)=>{console.log('Server running at http://localhost:3000/13.html')})
    .on('error', (e)=>{console.log('server.listen(3000): error: ', e.code)})
    .on('request', http_handler);
