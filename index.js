'use strict';
const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  const content =
`<!DOCTYPE html>
<html lang="ja">
  <body>
    <h1>HTMLの一番大きい見出しを表示します</h1>
  </body>
</html>`
  res.write(content);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
