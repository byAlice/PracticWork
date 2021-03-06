window.onscroll=function () {
    var oDiv=document.getElementById('div1');
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;  //做兼容，这里从上往下滚动时值为正，反之为负

    startMove(parseInt((document.documentElement.clientHeight - oDiv.offsetHeight) / 2 + scrollTop));   //目标值=(页面可视区高度-div的高度)/2+滚动条相对滚动的距离,使悬浮框悬浮在右侧中间，parseInt(目标值)将目标值转换成整数，由于屏幕最小单位是1px，出现小数时会上下抖动
};
var timer=null;

function startMove(iTarget) {
    var oDiv=document.getElementById('div1');

    clearInterval(timer);
    timer=setInterval(function () {
        var speed=(iTarget-oDiv.offsetTop)/6;

        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);   //判断向上向下取整,正数向上取整，负数向下取整

        if (oDiv.offsetTop==iTarget) {
            clearInterval(timer);
        } else {
            oDiv.style.top=oDiv.offsetTop+speed+'px';
        }
    },30);
}
