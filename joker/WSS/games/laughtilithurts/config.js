// JScript File

var assetsUrl = 'http://www.whysoserious.com/laughtilithurts/';
var videosUrl = 'http://www.whysoserious.com/laughtilithurts/';
var homeUrl =  'http://www.whysoserious.com/laughtilithurts/';

var flashvars = "&homeUrl=" + homeUrl + "&assetsUrl=" + assetsUrl + "&videosUrl=" + videosUrl;


function openNewWin(url, winName, features){
    window.open(url, winName, features);
}

function openPrivacyWin(){
    window.open(homeUrl+"privacy.htm", "privacywin", "width=500,height=600,scrollbars=yes");
}