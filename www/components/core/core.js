(function (window, $) {

    window.hy = window.hy || {};
    window.hy.core = {
        getRandom: function (count) {
            count = !isNaN(Number(count)) ? Math.ceil(count) : 8;
            var str = "";
            for (var i = 0; i < count; i++) {
                str += (Math.random() * 10).toString(36).charAt(parseInt(((Math.random() * 5) + 2).toString()));
            }
            return str;
        }
    };



} (window, Zepto))