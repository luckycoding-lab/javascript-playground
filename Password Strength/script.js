var pass = document.getElementById("password");
var msg = document.getElementById("msg");
var str = document.getElementById("str");

pass.addEventListener('input', ()=> {
    if(pass.value.length > 0) {
        msg.style.display = "block";
    }
    else {
        msg.style.display = "none";
    }
    if(pass.value.length < 4) {
        str.innerHTML = "Weak";
        pass.style.borderColor = "#833ab4";
        pass.style.color = "#833ab4";
        pass.style.transition = ".5s";
        msg.style.color = "#833ab4";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "Medium";
        pass.style.borderColor = "#06D6A0";
        pass.style.color = "#06D6A0";
        msg.style.color = "#06D6A0";
    }
    else if(pass.value.length < 12) {
        str.innerHTML = "Strong";
        pass.style.borderColor = "#000";
        pass.style.color = "#000";
        msg.style.color = "#000";
    }
    else if(pass.value.length <= 15) {
        str.innerHTML = "Amazing...";
        pass.style.borderColor = "#EF476F";
        pass.style.color = "#EF476F";
        msg.style.color = "#EF476F";
    }
})