let lists = document.getElementsByClassName("list");
let rightBox = document.querySelector(".right"); // Assuming it's a single box
let lefttBox = document.querySelector(".left");  // Assuming it's a single box

for (let list of lists) {
    list.addEventListener('dragstart', function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });
        lefttBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        lefttBox.addEventListener("drop", function(e){
            lefttBox.appendChild(selected);
            selected = null;
        });
    });
}
