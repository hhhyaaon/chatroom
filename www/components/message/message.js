(function (window, $) {
    if (!$) {
        console.error("require zepto");
        return;
    }
    // if (!window.hy
    //     || !window.hy.core
    //     || Object.getOwnPropertyNames(window.hy.core).length === 0) {
    //     console.error("require window.hy.core");
    //     return;
    // }


    window.hy = window.hy || {};
    window.hy.message = function (cfg) {
        var core = window.hy.core;
        var _cfg = $.extend({
            //外层box
            element: $("<div>"),
            //显示内容
            content: "",
            //延迟消失时间（0秒为不消失）      
            duration: 1.5
        }, cfg);

        var _this = null;
        var _element = _cfg.element;

        init();

        function init() {
            createDom();
            _this = new message();
        }

        function createDom() {
            var $box = $("<div>")
                .append(
                    $("<span>").text(_cfg.content)
                ).addClass("hy_message");

            _element.append($box);
        }

        function show(content, type) { }

        function hide() { }

        function destory() { }


        //实例对象
        function message() {
            if (this instanceof message === false) return;
            this.show = show;
            this.hide = hide;
            this.destory = destory;
            return this;
        }
        return _this;
    }

} (window, Zepto))