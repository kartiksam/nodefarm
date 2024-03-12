"use strict";
const replaceTemplate = require("./modules/replace");
const fs = require("fs");
const http = require("http");
const url = require("url");
const a = "${__dirname}";

// file readings
//makng synchronous version because this wil load only once when the application restars mot for every singlr request
const tempover = fs.readFileSync("template-overview.html", "utf-8");
const tempcard = fs.readFileSync("template-card.html", "utf-8");
const tempproduct = fs.readFileSync("template-product.html", "utf-8");

const data = fs.readFileSync("data.json", "utf-8");

const dataObj = JSON.parse(data);
// function to dynamically replace placehlder= arrow function implicitly return

// making server
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text.html",
    });
    const cardshtml = dataObj
      .map((el) => replaceTemplate(tempcard, el))
      .join(" ");
    const output = tempover.replace("{%PRODUCT_CARDS%}", cardshtml);
    res.end(output);
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text.html",
    });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempproduct, product);
    res.end(output);
  }
});
// server listrening

server.listen(8000, "127.0.0.1", () => {
  console.log("listeninhg");
});
