function validateform()
{
    var email=document.getElementById('email'); 
    var password=document.getElementById('pwd');



    if (email.value ==null || email.value ==""){  
        alert("email can't be blank");  
        return false;  
        }

    if (password.value == "") {
        alert("Please enter your password");
        
        return false;
    }
    if(password.length!= ""){
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
            if(regex.test(password.value) == false) 
            {    alert("Please enter a valid pwd");
                    return false;
            }       
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
      return (true)
    }
    else{
    
        alert("You have entered an invalid email address!")
    return (false)}

    
}
    function Checkfiles() {
        var email=document.getElementById('email'); 
        var password=document.getElementById('pwd');
        var fup = document.getElementById('filename');
        var fileName = fup.value;
        var ext = fileName.substring(fileName.lastIndexOf('.') + 1);


        if (email.value ==null || email.value ==""){  
            alert("email can't be blank");  
            return false;  
            }
        if (password.value == "") {
            alert("Please enter your password");
            
            return false;
        }
        if(password.length!= ""){
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
             if(regex.test(password.value) == false) 
             {    alert("Please enter a valid pwd");
                     return false;
             }       
        }
        if(ext =="JPEG" || ext=="jpeg") {
            return true;
        } else {
            alert("Upload Image of licence in JPEG");
            return false;
        }
    }