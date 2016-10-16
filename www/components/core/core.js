(function (window, $) {

    window.hy = window.hy || {};
    window.hy.core = {
        //获取随机数
        getRandom: function (count) {
            count = !isNaN(Number(count)) ? Math.ceil(count) : 8;
            var str = "";
            for (var i = 0; i < count; i++) {
                str += (Math.random() * 10).toString(36).charAt(parseInt(((Math.random() * 5) + 2).toString()));
            }
            return str;
        },

        //获取url query
        getQuery: function () {
            var query = {};
            var href = window.location.href;
            var query_str = href.substring(href.lastIndexOf("?") + 1);
            query_str.replace(/([^=&?]+)=([^=&?]*)/g, (w, $1, $2) => {
                var key = decodeURIComponent($1);
                var val = decodeURIComponent($2);
                query[key] = val;
            });
            return query;
        }
    };



} (window, Zepto))