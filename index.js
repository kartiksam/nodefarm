"use strict";
// Reading and writing files
// var fs = require("fs");
// fs.readFile("a.txt", "utf-8", (err, data1) => {
//   fs.readFile(`${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);

//     fs.readFile("c.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("your filw written");
//       });
//     });
//   });
// });
// console.log("will read file");
// Server create
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hello from the server");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listeniung to request on port 60000");
});
