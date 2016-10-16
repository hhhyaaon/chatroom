$(function () {

    var core = window.hy.core;

    var $panel = $("#panel");

    var socket = null;
    //全局提示信息
    var message = null;

    init();


    function init() {
        initMessage();
        initWebSocket();
        bind();

    }

    function bind() {
        $panel.find("#btn_send").click(send);
    }


    function initMessage() {
        message = window.hy.message({
            element: $("#chat_message"),
            content: ""
        });
    }


    function initWebSocket() {
        socket = io.connect();
        message.show("正在连接服务器...");
        socket.on("connect", function () {
            message.hide();
        });
    }



    function send() {
        var val = $panel.find(".input").val();
        socket.emit("foo", {
            id: core.getQuery().id,
            content: val
        });
    };


});