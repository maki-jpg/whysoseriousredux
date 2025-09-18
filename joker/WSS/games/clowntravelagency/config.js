// JScript File

var assetsUrl = 'http://assets.clowntravelagency.com/';
var homeUrl =  'http://www.clowntravelagency.com/';

var flashvars = "&homeUrl=" + homeUrl + "&assetsUrl=" + assetsUrl;


function openNewWin(url, winName, features){
    window.open(url, winName, features);
}

function openPrivacyWin(){
    window.open(homeUrl+"privacy.htm", "privacywin", "width=500,height=600,scrollbars=yes");
}