// JScript File

var assetsUrl = 'http://www.alternaterealitybranding.com/tdk/www_ibelieveinharveydent_com/';
var videosUrl = 'http://www.alternaterealitybranding.com/tdk/www_ibelieveinharveydent_com/';
var homeUrl =  'http://www.alternaterealitybranding.com/tdk/www_ibelieveinharveydent_com/';

var flashvars = "&homeUrl=" + homeUrl + "&assetsUrl=" + assetsUrl + "&videosUrl=" + videosUrl;


function openNewWin(url, winName, features){
    window.open(url, winName, features);
}

function openPrivacyWin(){
    window.open(homeUrl+"privacy.htm", "privacywin", "width=500,height=600,scrollbars=yes");
}