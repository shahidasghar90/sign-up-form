

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
   // console.log(elemId, hintMsg);
}

const element = document.getElementById("myBtn");
element.addEventListener("click", validateForm);

function validateForm() {

    const name = document.getElementById("fname");
    const email = document.getElementById("femail");
    const genderF = document.getElementById("fgender");
    const genderM = document.getElementById("mgender");
    const mobile = document.getElementById("fmobile");
    const password = document.getElementById("fpassword");
    const confirmPassword = document.getElementById("cpassword");
    const date = document.getElementById("fdate");
    



    //name validation
    var nameErr = true;
    var nameEl = name.value;

    if (nameEl === "") {
        printError("nameErr", "Please enter your name");
    } else {
        printError("nameErr", "");
        var regex = /^[a-zA-Z '.-]*$/;
        if(regex.test(nameEl) === false) {
           printError("nameErr", "Please enter Alphabate");
        } else {
            nameErr = false;
        }
    
    }
    //Email validation

    var emailErr = true;
    var emailEl = email.value;
    if(emailEl === ""){
        printError("emailErr", "Please enter your email address");
    } else {
        printError("emailErr", "");
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regex.test(emailEl) === false) {
            printError("emailErr", "Please enter your email address");
        } else {
            emailErr = false;
        }
    }

    //Password validation 
    var confPasswordErr = true;
    var passwordErr = true;
    var passwordEl = password.value;
    var confirmPasswordEl = confirmPassword.value; 
    
    if (passwordEl === ""){
        printError("passwordErr", "Your password must be contain number, letter capital, and special character");
    } else {
        printError("passwordErr", "");
        var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (regex.test(passwordEl) === false) {
            printError("passwordErr", "Your password must be contain number, letter capital, and special character");
        } else {
            passwordErr = false;
        }
    }
    //confirm password validation

    if (passwordEl === confirmPasswordEl) {
        printError("confPasswordErr", "");
    } else {
        printError("confPasswordErr", "you password is not matched");
        confPasswordErr = false;
    }


    //mobile validation

    var mobileErr = true;
    var mobileEl = mobile.value;
    //console.log(mobileEl);
    if (mobileEl === "") {
        printError("mobileErr", "Please enter your mobile");
    } else {
        printError("mobileErr", "");
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regex.test(mobileEl) === false) {
            printError("mobileErr", "Please enter your mobile");
        } else {
            mobileErr = false;
        }
    }

    //Gender validation 
    var genderErr = true;

    if(genderF.checked == false && genderM.checked == false) {
        printError("genderErr", "Please Enter your Gender");
        
     } else {
        printError("genderErr", "");
        genderErr = false;
     }
    // Date of Birth Validation 
     var dateErr = true;
     var dateEl = date.value;
     
     if(dateEl === "") {
        printError("dateErr", "Enter you date of birth");
     } else {
        printError("dateErr", "");
        dateErr = false;
     }

     if((nameErr || emailErr || mobileErr || passwordErr || genderErr) ==true) {
        return false;
     } else {
        var dataPreview = "you have successfully signup";
     }
     alert(dataPreview);

}


