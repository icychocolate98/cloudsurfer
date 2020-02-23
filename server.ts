import * as express from 'express';
import * as http from 'http';
import * as fs from 'fs';

const port = 3000;
const app = express();
// Create server and index.html page.
const server = http.createServer(function(req, res) {
    console.log('Request made on ' + req.url);
    const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res); 
});

server.listen(port, () => {
    console.log('Server starting in: localhost:'+ port);
});



