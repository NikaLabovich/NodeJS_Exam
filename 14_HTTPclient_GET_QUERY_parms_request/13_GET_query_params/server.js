let http = require('http');
const url = require('url');

let server = http.createServer();

let handler = (req, res) => {
    if (url.parse(req.url).pathname === '/parameter') {
        console.log(req.url);
        if (typeof url.parse(req.url, true).query.x != 'undefined' && typeof url.parse(req.url, true).query.y != 'undefined') {
            let x = parseInt(url.parse(req.url, true).query.x);
            let y = parseInt(url.parse(req.url, true).query.y);
            if (Number.isInteger(x) && Number.isInteger(y)) {
                let sum = x + y;
                let sub = x - y;
                let mul = x * y;
                let o = x / y;
                console.log('x + y = ' + sum +
                ', x - y = ' + sub +
                ', x * y = ' + mul +
                ', x / y = ' + o);
                res.end('x + y = ' + sum +
                    ', x - y = ' + sub +
                    ', x * y = ' + mul +
                    ', x / y = ' + o);
            } else {
                res.end('Error. Parameter is not a number')
            }
        }
    }
};

server.listen(5000, (v) => { console.log('Running') })
    .on('error', (e) => { console.log('Error: ', e.code) })
    .on('request', handler);
