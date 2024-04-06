const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const path = req.url === '/' ? '/index.html' : req.url;
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
