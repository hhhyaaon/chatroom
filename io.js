var socket = require("socket.io");

var io = null;
function listen(server) {
    var io = socket.listen(server);

    io.on("connection", function (socket) {
        console.log(socket);
        socket.on("foo", function (data) {
            //将消息输出到控制台
            console.log(data);
        })
    })
}

module.exports = {
    listen: listen
}