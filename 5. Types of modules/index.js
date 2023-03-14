// local module
const { add } = require("./other");

// core module
var http = require("http");

const server = http.createServer(function (req, res) {
  console.log("server is running");
});

server.listen(5000);

console.log(add(5, 6));
