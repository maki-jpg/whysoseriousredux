// JScript File

var assetsUrl = 'http://www.ccfabg.org/';
var videosUrl = 'http://www.ccfabg.org/';
var homeUrl =  'http://www.ccfabg.org/';

var flashvars = "&homeUrl=" + homeUrl + "&assetsUrl=" + assetsUrl + "&videosUrl=" + videosUrl;


function openNewWin(url, winName, features){
    window.open(url, winName, features);
}

function openPrivacyWin(){
    window.open(homeUrl+"privacy.htm", "privacywin", "width=500,height=600,scrollbars=yes");
}