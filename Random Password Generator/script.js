const shownPassword = document.getElementById('password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbols =  "!@#$%^&*()_+/*-{}[]\\|:''?/.,<>~`.";

const allChars = upperCase + lowerCase + num + symbols;

function createPassword() {
let passwords = "";
passwords += upperCase[Math.floor(Math.random() * upperCase.length)];
passwords += lowerCase[Math.floor(Math.random() * lowerCase.length)];
passwords += num[Math.floor(Math.random() * num.length)];
passwords += symbols[Math.floor(Math.random() * symbols.length)];

while(length > passwords.length) {
passwords += allChars[Math.floor(Math.random() * allChars.length)];
}
shownPassword.value = passwords;
        
}

function copyPassword() {
    shownPassword.select();
    document.execCommand("copy");
}