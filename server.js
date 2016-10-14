var express = require("express");
var http = require("http");
var path = require("path");
var io = require("./io");

var app = express();
var server = http.createServer(app);

app.use("/", express.static(__dirname + "/www"));
app.use("/components", express.static(__dirname + "/components"));

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "./views/index.html"));
// });

server.listen(3333);
console.log("listen at localhost:3333");

io.listen(server);

