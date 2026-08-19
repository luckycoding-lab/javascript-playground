var nameerror = document.getElementById("nameerror");
var phoneError = document.getElementById("phoneError");
var emailerror = document.getElementById("emailerror");
var msgerror = document.getElementById("msgerrorr");
var suberror = document.getElementById("suberror");


function validateName() {
    var name = document.getElementById("contact-name").value;
    
    if(name.length == 0) {
        nameerror.innerHTML = 'Name is Required';
        return false;
    } 
    if(!name.match(/^[A-Za-z]*\s[A-Za-z]*$/)) {
        debugger;
        nameerror.innerHTML = 'Write Full Name';
        return false;
    }
    nameerror.innerHTML = '<i class="bi bi-check"></i>';
    return true;
}

function validatePhoneno() {
    var phone = document.getElementById('validatePhone').value;

    if(phone.length == 0) {
        phoneError.innerHTML = 'Number is Required';
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = 'Number Should be 10 Digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Number is Required';
        return false;
    }

    phoneError.innerHTML = '<i class="bi bi-check"></i>';
    return true;
}

function validatEmail() {
    var email = document.getElementById('validEmail').value;
    if(email.length == 0) {
        emailerror.innerHTML = 'Email is Required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailerror.innerHTML = 'Invalid Email';
        return false;
    }

    emailerror.innerHTML = '<i class="bi bi-check"></i>';
    return true;
}

function validmsg() {
    var message = document.getElementById('contact-msg').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0) {
        msgerror.innerHTML = left + 'Write Some Message in it.';
        return false;
    }
    msgerror.innerHTML = '<i class="bi bi-check"></i>';
    return true;
}

function validdateform() {
    if(!validatEmail() || !validateName() || !validatePhoneno() || !validatEmail()) {
        suberror.style.display = 'block';
        suberror.innerHTML = 'Please Fix error to to Submit';
        setTimeout(
            function()
            {
                suberror.style.display = 'none';
            }, 3000);
        return false;
    }   
}