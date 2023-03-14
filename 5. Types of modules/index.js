// local module
const { add } = require("./other");
// core module
const http = require("http");
// third party module : underscore
const _ = require("underscore");

console.log(add(5, 6));

const server = http.createServer(function (req, res) {
  console.log("server is running");
});
server.listen(5000);

const stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];

console.log(_.pluck(stooges, "name"));
