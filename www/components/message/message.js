(function (window, $) {
    if (!$) {
        console.error("require zepto");
        return;
    }
    if (!window.hy
        || !window.hy.core
        || Object.getOwnPropertyNames(window.hy.core).length === 0) {
        console.error("require window.hy.core");
        return;
    }


    window.hy = window.hy || {};
    window.hy.message = function (cfg) {
        var core = window.hy.core;
        var _cfg = $.extend(true, {
            // message id
            id: core.getRandom(),
            //外层box
            element: $("<div>"),
            //显示内容
            content: "",
            //延迟消失时间（0秒为不消失）      
            duration: 1.5
        }, cfg);



    }




} (window, Zepto))