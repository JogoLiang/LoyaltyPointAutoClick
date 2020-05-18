// ==UserScript==
// @name         LoyaltyPointAutoClick
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  用甚麼滑鼠連點，弱掉了!用這個打開網頁就好，你不會錯過任何一個忠誠點數寶箱
// @author       You
// @include      https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function ShowDTNow()
    {
        var NowDate = new Date();
        var d = NowDate.getDay();
        var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        return '目前時間：' + NowDate.toLocaleString() + '（' + dayNames[d] + '）';
    }
    setInterval(function(){
        if(document.getElementsByClassName("tw-button tw-button--success tw-interactive").length >0){
            document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0].click();
            console.log(ShowDTNow()+"於"+document.URL+" 拿到了忠誠點數。");
        }
    }, 5000);
})();
