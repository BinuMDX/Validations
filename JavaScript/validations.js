function validateform(){
   
    const userid = document.forms["form"]["UserId"].value;
    const password = document.forms["form"]["Password"].value;
    const Name = document.forms["form"]["Name"].value;
    const country = document.forms["form"]["Country"].value;
    const email = document.forms["form"]["Email"].value;
    const Gender = document.getElementsByName("gender");
    const Elan = document.forms["form"]["English"].checked;
    const NElan = document.forms["form"]["Nonenglish"].checked;


    if (validateuserid(userid, 12, 5) === false){
        return false;
    }
    else if (validatepassword(password, 12, 7) === false){
        return false;
    }
    else if (validatename(Name) === false){
        return false;
    }
    else if (validatecountry(country) === false){
        return false;
    }
    else if (validateemail(email) === false){
        return false;
    }
    else if (validategender(Gender) === false){
        return false;
    }
    else if (validateLanguge(Elan, NElan) === false){
        return false;
    }
    
    return true;
 
}

function validateuserid(name, max, min){
    if (name == ""){
        alert("User id must be filled out");
        return fase;
    }
    else if (name.length < max && name.length > min){
        return true;
    }
    else{  
        alert("User id should be " + min + " to " + max + " characters");
        return false;
    }
}

function validatepassword(name, max, min){
    
    if (name == ""){
        alert("Password must be filled out");
        return false;
    }
    else if (name.length < max && name.length > min){
        return true;
    }
    else{  
        alert("Password should be " + min + " to " + max + " characters");
        return false;
    }
}

function validatename(Name){
   
    if (Name == ""){
        alert("Name must be filled out");
        return false;
    }   
    else if ( (/^[a-zA-Z]+$/.test(Name) === false)){
        alert("Enter alphabatic characters only for name");
        return false;
    }
    else{  
        return true; 
    }
}

function validatecountry(name){
    if (name == "default"){
        alert("Please select country");
        return false;
    }
    else{ 
        return true;
    }
}

function validateemail(name){
    if (name == ""){
        alert("E mail must be filled out");
        return false;
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)=== false) {
        alert("Your email is a invalid email address !");
        return false;
      
    }
     else {
        return true;
    }
}

function validategender(gender){
  
    var genValue = false;

        for(var i=0; i<gender.length;i++){
            if(gender[i].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
            alert("Please Choose the sex");
            return false;
        }
        else{
            return true;
        }
}

 function validateLanguge(Elan, NElan){
   
    if(!Elan && !NElan)
    {
        alert("Select a language");
        return false;   
    }
    else{
        return true; 
    }
 }
