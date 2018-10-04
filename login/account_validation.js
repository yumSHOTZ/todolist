function loginProcess(){
    var uname = document.getElementById('uname');
    var passw = document.getElementById('password');
    var password = "12345";
    var username = "tanginamo"


    if(uname.value === "" || passw.value === ""){

        if(uname.value === "" ){
            alert("Please enter your username.");
            uname.focus();
            return false;
        }

        else{
            alert("Please enter you password.");
            passw.focus();
            return false;
        }
    }

    else{

        if(uname.value !== username){
            alert("Username entered doesn't exist.");
            uname.value = "";
            uname.focus();
            return false;
        }

        else if(passw.value !== password){
            alert("Password entered doesn't match");
            passw.value = "";
            passw.focus();
            return false;
        }

    }
    return true;
}