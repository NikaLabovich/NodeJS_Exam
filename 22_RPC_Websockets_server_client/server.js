const rpcWSS = require('rpc-websockets').Server;

let server = new rpcWSS({ port: 4000, host: 'localhost' });

server.register('sum', (params) => {
    return Number.parseInt(params[0]) + Number.parseInt(params[1])
}).public();

server.register('get', (params) => {
    return { id: params[0], date: new Date().toISOString() }
}).public();
