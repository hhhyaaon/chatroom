$(function () {

    var $panel = $("#panel");

    var socket = null;

    init();


    function init() {
        initWebSocket();
        bind();

    }

    function bind() {
        $panel.find("#btn_send").click(send);
    }

    function initWebSocket() {
        socket = io.connect();
        socket.on("connect", function () {
            
        });
    }

    function send() {
        var val = $panel.find(".input").val();
        socket.emit("foo", val);
    };


});