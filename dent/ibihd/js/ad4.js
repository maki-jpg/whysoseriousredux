// JScript File

if (AC_FL_RunContent == 0 || DetectFlashVer == 0) {
    alert("This page requires AC_RunActiveContent.js.");
} else {
    hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
    if(hasRightVersion) {  // if we've detected an acceptable version
        // embed the flash movie
        AC_FL_RunContent(
            'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,45,0',
            'width', '431',
            'height', '358',
            'src', 't1_2',
            'quality', 'high',
            'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
            'align', 'middle',
            'play', 'true',
            'loop', 'true',
            'scale', 'showall',
            'wmode', 'window',
            'devicefont', 'false',
            'id', 'ad3',
            'bgcolor', '#ffffff',
            'name', 'ad3',
            'menu', 'true',
            'allowScriptAccess','sameDomain',
            'allowFullScreen','false',
            'movie', 't1_2',
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