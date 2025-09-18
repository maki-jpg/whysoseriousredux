// JScript File

var assetsUrl = 'http://www.whysoserious.com/overture/';
var videosUrl = 'http://www.whysoserious.com/overture/';
var homeUrl =  'http://www.whysoserious.com/overture/';
var swfId =  'asd5f1sd';

var flashvars = "&homeUrl=" + homeUrl + "&assetsUrl=" + assetsUrl + "&videosUrl=" + videosUrl + "&swfid=" + swfId;


function openNewWin(url, winName, features){
    window.open(url, winName, features);
}

function openPrivacyWin(){
    window.open(homeUrl+"privacy.htm", "privacywin", "width=500,height=600,scrollbars=yes");
}