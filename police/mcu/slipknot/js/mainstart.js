// JScript File

var copdivArr;
var TRY_AGAIN = "<a href='javascript:void(0);' onclick='javascript:showForm();'>  Try Again</a>";

function initpage(){
    copdivArr = $$("div.officerDiv");
    
    for(var i=0; i < copdivArr.length; i++){
        $(copdivArr[i]).observe("mouseover", showCopHighlight);
    }
    
    var copimgArr = $$("a.copimglink");
    
    for(var j=0; j < copimgArr.length; j++){
        $(copimgArr[j]).observe("click", showPoster);
    }
    
    initStatus();
}


function initStatus(){
    

}


function submitSuspect(){
    
    
    var confnum = $("confnumTB").value;
    var lastname = $("lastnameTB").value;
    var destination = $("destinationTB").value;
    var errors = "";
    
    errors = validateInput(confnum, lastname, destination);
    
    if(errors.length > 0){
        $("formStatusMsg").innerHTML = errors + " " + TRY_AGAIN;
        $("formDiv").hide(); 
        $("formStatusMsg").show();
        return; 
    }else{
        $("formStatusMsg").innerHTML = "loading...";
        $("formDiv").hide(); 
        $("formStatusMsg").show();
    }
    
    
    var date = new Date();
    var seed = date.getMilliseconds();
    
    new Ajax.Request('../submissionHandler.ashx?conf=' + confnum + '&last=' + lastname + '&dest=' + destination + '&seed=' + seed,
      {
        method:'get',
        requestHeaders: {Accept: 'application/json'},   
        
        onSuccess: function(transport){
            var response = transport.responseText.evalJSON(true) || "error (0)";
            
            switch(response.Response){
                case "nomatch":
                    $("formStatusMsg").innerHTML = "Your data appears to be incorrect. <br/>Please " + TRY_AGAIN;
                    break;
                   
                case "toolate":
                    $("formStatusMsg").innerHTML = "This data has already been successfully submitted.";
                    break;
                   
                case "success":
                    initStatus(); 
                    $("formStatusMsg").innerHTML = "Your data checks out! We will act upon this information immediately.";
                    break;    
                   
                case "error":
                    $("formStatusMsg").innerHTML = "An unexpected error has occurred. " + TRY_AGAIN;
                    break;
                   
                default:
                    break;   
            }
            
            $("formDiv").hide(); 
            $("formStatusMsg").show();
            
        },
        
        onFailure: function(){ 
            $("formStatusMsg").innerHTML = "An unexpected error has occurred. " + TRY_AGAIN; 
            $("formDiv").hide(); 
            $("formStatusMsg").show();
        }
        });
     
}


function validateInput(arg1, arg2, arg3){
    if(arg1.length == 0 || 
       arg2.length == 0 ||
       arg3.length == 0){
            return "All fields are required.";
    }else{
        return "";
    } 
}


function resetForm(){
    $("confnumTB").value = "";
    $("lastnameTB").value = "";
    $("destinationTB").value = "";      
    $("formStatusMsg").innerHTML = "";
    $("formStatusMsg").hide();
    $("formDiv").show();        
}


function showForm(){
    $("formStatusMsg").innerHTML = "";
    $("formStatusMsg").hide();
    $("formDiv").show();
}


function showPoster(evt){
/*    var element = evt.element();
    var url = "IDs/" + element.id + ".jpg";
    var winsize = "profilewin";
    var features = "width=422,height=500,resizable=no,scrollbars=no";
    
    window.open(url, winsize, features);
*/

    var element = evt.element();
    var url = "IDs/" + element.id + ".jpg";
    var winsize = "profilewin";
    //var features = "width=422,height=500,resizable=no,scrollbars=no";
    var features = "width=392,height=964,resizable=yes,scrollbars=auto";
    
    window.open(url, winsize, features);
}


function showCopHighlight(evt){
    var element = evt.element();
    
    if(element.tagName.toLowerCase() == "div"){ 
       
        //element.stopObserving("mouseover", showCopHighlight);
        element.observe("mouseout", hideCopHighlight);
        
       if(!element.hasClassName("officerHighlight")){   
            
            clearAllBkgds();
            element.addClassName("officerHighlight");
      }
   }else{
        var parent = element.ancestors();
        for(var i=0; i < 2; i++){
            //alert(element.id + " parent[" + i + "]: " + parent[i].id);
            
            // check to see if we have rolled over a child of our target //
            if(parent[i].hasClassName("officerDiv")){
                if(!parent[i].hasClassName("officerHighlight")){   
                    parent[i].addClassName("officerHighlight");
                    parent[i].observe("mouseout", hideCopHighlight); 
                } 
                return;        
            }
       }  
   }
}


function hideCopHighlight(evt){
    var element = evt.element();

    // ----------------------------------------------------------------------------------- //
    // make sure we are mouseing out of what we intend to be mousing out of. //
    if (!e) var e = evt;  //window.event;
    
    var tg = (window.event) ? e.srcElement : e.target;
    
    //alert("tg.tagName: " + tg.tagName);
    
    if (tg.nodeName != 'DIV') return;
    
    var reltg = e.relatedTarget;  //(e.relatedTarget) ? e.relatedTarget : e.toElement;
    
    if(reltg == null || reltg == "undefined") return;
    
    if(reltg.nodeName != "HTML" && tg.nodeName != "HTML"){
        while (reltg != tg && reltg.nodeName != 'BODY'){
            reltg= reltg.parentNode;
        } 
    }
    
    if(reltg.nodeName != "HTML" && tg.nodeName != "HTML"){	        
        if (reltg== tg) return;
    }
    // ----------------------------------------------------------------------------------- //
    // Mouseout took place when mouse actually left layer
    // Handle event



    //element.stopObserving("mouseout", hideCopHighlight);
    element.observe("mouseover", showCopHighlight);            

    if(element.hasClassName("officerHighlight")){   
        element.removeClassName("officerHighlight");  	
    }
}


function clearAllBkgds(){
    for(var i=0; i < copdivArr.length; i++){
        if($(copdivArr[i]).hasClassName("officerHighlight")){
            $(copdivArr[i]).removeClassName("officerHighlight");
        }
    }
}