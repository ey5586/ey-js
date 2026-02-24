
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    return r ? unescape(r[2]) : null;
}

var c = getUrlParam('c');
var key = getUrlParam('key');

fetch("https://eyqqq.55k.pw/link-service/jump_handler.php?c=" + c + "&key=" + key + "&step=0")
    .then(res => res.json())
    .then(data => {
        if (data.code === 200) {
            window.location.href = data.url;
        } else {
            alert(data.msg);
        }
    });
