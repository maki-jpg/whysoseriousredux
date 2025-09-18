// JScript File

var assetsUrl = 'http://www.gothamcablenews.com/';
var videosUrl = 'http://media.gothamcablenews.com/';
var homeUrl =  'http://www.gothamcablenews.com/';

//var flashvars = "&homeUrl=" + homeUrl + "&assetsUrl=" + assetsUrl + "&videosUrl=" + videosUrl;
var flashvars = "&homeUrl=" + homeUrl + "&assetsUrl=" + assetsUrl + "&vidUrl=" + videosUrl + "&videosUrl=" + videosUrl;

function openNewWin(url, winName, features){
    window.open(url, winName, features);
}

function openPrivacyWin(){
    window.open(homeUrl+"privacy.htm", "privacywin", "width=500,height=600,scrollbars=yes");
}