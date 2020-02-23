"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const port = 3000;
const app = express();
// set first request
app.get('/', (req, res) => {
    res.send('Succesfully connected to express server on port.' + port + "\n");
});
// Create server !
const server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is starting = ' + port);
});
//# sourceMappingURL=server.js.map