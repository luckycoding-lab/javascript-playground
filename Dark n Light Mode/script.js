let theme = document.getElementById("theme");
let img = document.getElementById("img");

theme.onclick = function() {
    document.body.classList.toggle("newtheme");
    if(document.body.classList.contains("newtheme")){
        theme.src = "sun-line.png";
        img.src = "bohemian-man-making-deal-removebg-preview.png";
    } else {
        theme.src = "sun.png";
        img.src = "artist-white-removebg-preview.png";
    }
}