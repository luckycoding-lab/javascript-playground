const blockQ = document.getElementsByTagName("blockquote")[0];
// const nameAuthor = document.getElementsByTagName("span")[0]; 
const newJoke = document.getElementById("newJoke");


const apiKey = "/pETYy45VMwBUPNYieKYCQ==e6PYDFpUPgPmSsZf";
const apiUrl = "https://api.api-ninjas.com/v1/jokes";



const option = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};


async function getJoke() {
    blockQ.innerHTML = "Loading...";
    newJoke.disabled = true;
    newJoke.innerHTML = "Please Wait...";


    const response = await fetch(apiUrl, option);
    const data = await response.json();


    newJoke.disabled = false;
    newJoke.innerHTML = "New Joke";

    blockQ.innerHTML = data[0].joke;    
}


newJoke.addEventListener("click", getJoke);


function openTweet() {
    window.open("https://twitter.com/intent/tweet?text=" + blockQ.innerHTML  + "--by  API Ninja Because I am Learnign JS", "Tweet Window");
}