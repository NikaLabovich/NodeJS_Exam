let http = require('http');
let qs = require('querystring');

let params = qs.stringify({x:2, y:3});

let path = '/parameter?' + params;

let options = {
    host: 'localhost',
    port: '5000',
    path: path,
    method: 'GET'
}

const req = http.request(options, (res) => {
    res = '';
    req.on('data', (data) => {
        res += data;
    })
    req.on('end', () => {console.log(res)});
});

req.on('error', (e) => { console.log(e.message);});

req.end();
