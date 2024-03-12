"use strict";
const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("hello overview mittar");
  } else if (pathName === "/product") {
    res.end("hello products");
  } else {
    res.writeHead(400, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h1>page not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to request on port 8000");
});
