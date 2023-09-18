function validateform(){  
    var name=document.getElementById('name');  
    var password=document.getElementById('pwd');
    var password1=document.getElementById('password1');
    var email=document.getElementById('email');  
    var phone=document.getElementById('no'); 
    var radio=document.getElementById('radio');  
    
    if (name.value ==null || name.value ==""){  
    alert("Name can't be blank");  
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
 
    if(password.value != password1.value){
        alert("Password mismatch");
        return false;
    }
    if (email.value ==null || email.value ==""){  
        alert("email can't be blank");  
        return false;  
        }
    if (phone.value == "") {
        alert("Please enter your PHONE NUMBER");
        
        return false;
    }
    
     if(phone.length!= ""){
        var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;               
         if(regex.test(phone.value) === false) 
         {    alert("Please enter 10 digit number");
                 return false;
         }       
    }
   
    
   if(radio.checked==false)
   {
    alert("please fill the radio button");
    return false;
   }
   
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
      return (true)
    }
    else{
    
        alert("You have entered an invalid email address!")
    return (false)}
    
}
    