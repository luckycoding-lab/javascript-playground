let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowicon = document.getElementById("arrow-icon");


selectField.onclick = function() {
        list.classList.toggle("hide");
        arrowicon.classList.toggle("rotate");
}

for(options of options) {
    options.onclick = function() {
        list.classList.toggle("hide");
        arrowicon.classList.toggle("rotate");
        selectText.innerHTML = this.textContent;
    }
}