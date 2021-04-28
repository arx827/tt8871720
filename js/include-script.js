includeJsObj = {};
includeJsObj.comments = includeJsObj.comments || {};

includeJsObj.isFirstLoad = function (namesp) {
    var isFirst = namesp.firstLoad === undefined;
    namesp.firstLoad = false;
    return isFirst;
};

(function () {

    function dynamicallyLoadScript(urlAry) {
        var scriptAll = document.createElement("div");
        for (i = 0; i < urlAry.length; i++) {
            var script = document.createElement("script");
            script.src = urlAry[i];
            scriptAll.appendChild(script);
        }
        document.body.appendChild(scriptAll);
    }

    document.addEventListener("DOMContentLoaded", function (event) {

        if (!includeJsObj.isFirstLoad(includeJsObj.comments)) {
            return;
        }

        // var jsPath = "https://direct.fubonlife.com.tw/m";
        // if (location.hostname.indexOf("direct.fbl.com.tw") >= 0 || location.hostname.indexOf("localhost") >= 0) {
        //     jsPath = "https://direct.fbl.com.tw:1200/m2";
        // }

        var jsPath;

        if(((location.href).toLowerCase()).indexOf("direct.fubonlife.com.tw") >= 0 ){
            jsPath="https://direct.fubonlife.com.tw/Life/direct";
        }else{
            jsPath="https://direct.fbl.com.tw:1200/mpm/Life/direct";
        }

        dynamicallyLoadScript([jsPath+"/system/common/js/cookie-agree.js"]);
    });

})();



