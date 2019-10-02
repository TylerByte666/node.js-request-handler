const http = require('http');

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'POST' && request.url === '/echo') {
    response.setHeader('Content-Type', 'text/html; charset=utf8');
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html; charset=utf8');    
    response.end();
  }
}).listen(8080);