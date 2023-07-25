(function () {
    // Add jQuery
    var script = document.createElement('script');
    script.src = 'http://127.0.0.1/bot/jquery.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    // Load jQuery
    script.onload = function () {
        var $ = window.jQuery.noConflict(true);
        init()
    };

    // Start script
    function init() {
        setTimeout(function () {
            if (window.parent == window) {
                var currWin = document.getElementById("jt_iframe").contentWindow;
                $(currWin.document).find('.ball').css('width', '50px');
                $(currWin.document).find('.normal').css('width', '50px');
                var btn = '<div id="test_default" class="jqbb" style=" text-align:center; margin-top:15px; margin-left:5px; margin-right:20x"><button id="xc" type="button"  style="width=110% ;font-family:Microsoft YaHei; font-size:13px;" class="jbtn" >快速</button></div>';
                $(currWin.document).find('div#jsss').before(btn);
                $(currWin.document).find("#button").click(function () {
                    currWin.get("qwss").setValue("1");
                    currWin.get("bu").click()
                });
            }
            console.log('bot is loaded');
        }, 5000)
    }

})();

function botClick(){
    alert($(_x('/html/body/div[1]/div[1]/div[2]/div/div[2]/div[3]'))[0].children[0].innerText);
}

function _x(STR_XPATH) {
    var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
    var xnodes = [];
    var xres;
    while (xres = xresult.iterateNext()) {
        xnodes.push(xres);
    }

    return xnodes;
}