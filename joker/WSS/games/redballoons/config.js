// JScript File

var assetsUrl = 'http://www.whysoserious.com/redballoons/';
var videosUrl = 'http://www.whysoserious.com/redballoons/';
var homeUrl =  'http://www.whysoserious.com/redballoons/';
var swfId =  'ba7700a';

var flashvars = "&homeUrl=" + homeUrl + "&assetsUrl=" + assetsUrl + "&videosUrl=" + videosUrl + "&swfid=" + swfId;


function openNewWin(url, winName, features){
    window.open(url, winName, features);
}

function openPrivacyWin(){
    window.open(homeUrl+"privacy.htm", "privacywin", "width=500,height=600,scrollbars=yes");
}