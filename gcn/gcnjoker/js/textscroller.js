// JScript File

/*
Cross browser Marquee script- © Dynamic Drive (www.dynamicdrive.com)
For full source code, 100's more DHTML scripts, and Terms Of Use, visit http://www.dynamicdrive.com
Credit MUST stay intact
*/

//Specify the marquee's width (in pixels)
var marqueewidth="970px"
//Specify the marquee's height
var marqueeheight="17px"
//Specify the marquee's marquee speed (larger is faster 1-10)
var marqueespeed=2
//configure background color:
var marqueebgcolor="#000000"
//Pause marquee onMousever (0=no. 1=yes)?
var pauseit=0

//Specify the marquee's content (don't delete <nobr> tag)
//Keep all content on ONE line, and backslash any single quotations (ie: that\'s great):






var marqueecontent= '<nobr><font face="Verdana"><span style="color:White;">'
+ 'Hollywood in Gotham? Major director considers filming in Gainsly. &nbsp;&nbsp;&nbsp;&nbsp;'
+ 'Batman intervenes during liquor store robbery in Sheal. &nbsp;&nbsp;&nbsp;&nbsp;'
+ 'Preservationists fight to save historic Adelphia Movie Theater. &nbsp;&nbsp;&nbsp;&nbsp;'
+ 'Gas prices rising. City Council to decide on city tax rebate. &nbsp;&nbsp;&nbsp;&nbsp;'
+ 'Mainline bursts in the Narrows. Three people seriously injured. &nbsp;&nbsp;&nbsp;&nbsp;'
+ 'Electrical failure in South Hinkley throws neighborhood into panic. &nbsp;&nbsp;&nbsp;&nbsp;'
+ 'Gotham International Airport cited for safety violations. &nbsp;&nbsp;&nbsp;&nbsp;'
+ 'Meagan and Charles picked "most popular" baby names in Gotham. &nbsp;&nbsp;&nbsp;&nbsp;'
+ 'Health inspector shut down Luigi\'s Famous Pies in Jerold. &nbsp;&nbsp;&nbsp;&nbsp;'
+ 'Health inspector fired for accepting bribes. &nbsp;&nbsp;&nbsp;&nbsp;'
+ 'Garbageman\'s Union raises stink about health benefits. &nbsp;&nbsp;&nbsp;&nbsp;'
+ 'Sewer worker falls down well. &nbsp;&nbsp;&nbsp;&nbsp;'
+ '</span></font></nobr>';


////NO NEED TO EDIT BELOW THIS LINE////////////
marqueespeed=(document.all)? marqueespeed : Math.max(1, marqueespeed-1) //slow speed down by 1 for NS
var copyspeed=marqueespeed
var pausespeed=(pauseit==0)? copyspeed: 0
var iedom=document.all||document.getElementById
if (iedom)
document.write('<span id="temp" style="visibility:hidden;position:absolute;top:-100px;left:-9000px">'+marqueecontent+'</span>')
var actualwidth=''
var cross_marquee, ns_marquee

function populate(){
if (iedom){
cross_marquee=document.getElementById? document.getElementById("iemarquee") : document.all.iemarquee
cross_marquee.style.left=parseInt(marqueewidth)+8+"px"
cross_marquee.innerHTML=marqueecontent
actualwidth=document.all? temp.offsetWidth : document.getElementById("temp").offsetWidth
}
else if (document.layers){
ns_marquee=document.ns_marquee.document.ns_marquee2
ns_marquee.left=parseInt(marqueewidth)+8
ns_marquee.document.write(marqueecontent)
ns_marquee.document.close()
actualwidth=ns_marquee.document.width
}
lefttime=setInterval("scrollmarquee()",20)
}
window.onload=populate

function scrollmarquee(){
if (iedom){
if (parseInt(cross_marquee.style.left)>(actualwidth*(-1)+8))
cross_marquee.style.left=parseInt(cross_marquee.style.left)-copyspeed+"px"
else
cross_marquee.style.left=parseInt(marqueewidth)+8+"px"

}
else if (document.layers){
if (ns_marquee.left>(actualwidth*(-1)+8))
ns_marquee.left-=copyspeed
else
ns_marquee.left=parseInt(marqueewidth)+8
}
}

if (iedom||document.layers){
with (document){
document.write('<table border="0" cellspacing="0" cellpadding="0"><td>')
if (iedom){
write('<div style="position:relative;width:'+marqueewidth+';height:'+marqueeheight+';overflow:hidden">')
write('<div style="position:absolute;width:'+marqueewidth+';height:'+marqueeheight+';background-color:'+marqueebgcolor+'" onMouseover="copyspeed=pausespeed" onMouseout="copyspeed=marqueespeed">')
write('<div id="iemarquee" style="position:absolute;left:0px;top:0px"></div>')
write('</div></div>')
}
else if (document.layers){
write('<ilayer width='+marqueewidth+' height='+marqueeheight+' name="ns_marquee" bgColor='+marqueebgcolor+'>')
write('<layer name="ns_marquee2" left=0 top=0 onMouseover="copyspeed=pausespeed" onMouseout="copyspeed=marqueespeed"></layer>')
write('</ilayer>')
}
document.write('</td></table>')
}
}