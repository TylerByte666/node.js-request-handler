// curl -k https://localhost:8000/
const http = require('http');
const fs = require('fs');

http.createServer( (request, response) => {
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
    response.pipe('<h1 style="color:Red;>Please make sure you use POST as method and /echo endpoint</h1>');   
    response.end();
  }
}).listen(8080);




let crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('crypto support is disabled!');
}