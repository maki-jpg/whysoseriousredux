// JScript File

if (AC_FL_RunContent == 0 || DetectFlashVer == 0) {
    alert("This page requires AC_RunActiveContent.js.");
} else {
    hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
    if(hasRightVersion) {  // if we've detected an acceptable version
        // embed the flash movie
        AC_FL_RunContent(
            'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,45,0',
            'width', '430',
            'height', '320',
            'src', 't2_1',
            'quality', 'high',
            'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
            'align', 'middle',
            'play', 'true',
            'loop', 'true',
            'scale', 'showall',
            'wmode', 'window',
            'devicefont', 'false',
            'id', 'ad6',
            'bgcolor', '#ffffff',
            'name', 'ad6',
            'menu', 'true',
            'allowScriptAccess','sameDomain',
            'allowFullScreen','false',
            'movie', 't2_1',
            'salign', '',
            'flashvars', flashvars
            ); //end AC code
    } else {  // flash is too old or we can't detect the plugin
        var alternateContent = 'Alternate HTML content should be placed here.'
            + 'This content requires the Adobe Flash Player.'
            + '<a href=http://www.macromedia.com/go/getflash/>Get Flash</a>';
        document.write(alternateContent);  // insert non-flash content
    }
}