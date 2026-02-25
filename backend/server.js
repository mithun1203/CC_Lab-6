const http = require('http');
const os = require('os');

const PORT = 8080;

const server = http.createServer((req, res) => {
    const hostname = os.hostname();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Served by backend: ${hostname}\n`);
});

server.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
