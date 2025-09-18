// JScript File


var RETRY = "<a href='javascript:showForm();'>Try Again.</a>";


function doSubmit(){
    var email = $("emailTB").value;
   
    if(email.length == 0){
        $("emailFormDiv").style.display = "none";
        $("errormsgs").innerHTML = "Please enter a valid email address.  " + RETRY;
        $("errormsgsDiv").style.display = "block";
        return;    
    }

   $("emailFormDiv").style.display = "none"; 
   $("loadingDiv").style.display = "block";
   
    new Ajax.Request('http://www.gothamcablenews.com/emailHandler.ashx',
              {
                method:'post',
                parameters: { email: email },
                requestHeaders: {Accept: 'application/json'},   
                
                onSuccess: function(transport){
                    $("loadingDiv").style.display = "none";
                
                    var response = transport.responseText.evalJSON(true) || "error (0)";
                                
                    if(response.Error){                        
                        $("errormsgs").innerHTML = response.Error + "  " + RETRY;
                    }else if(response.Success){
                        $("errormsgs").innerHTML = response.Success; 
                    }
                    
                    $("errormsgsDiv").style.display = "block";
                },
                
                onFailure: function(){ 
                    alert('An error has occurred.  Please try again later.') 
                }
            }
    );    
     

}


function showForm(){
    $("errormsgsDiv").style.display = "none";
    $("emailFormDiv").style.display = "block";
}