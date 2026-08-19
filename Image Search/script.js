const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("show-more-btn");
const accessKey = "tQIvtVix4zV2teYOd3ptyYQ3WfFpV6RI8BevkgcCe1I";

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;
    
    // Clear previous search results when starting a new search
    if (page === 1) {
        searchResult.innerHTML = ""; 
    }

    // Use forEach instead of map since you're not returning a new array
    results.forEach((result) => {
        // Create a new image element for each result
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        // Append image to the link, then link to the result container
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    showMoreButton.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;

    searchImages();
});
showMoreButton.addEventListener('click', () => {
    page++;
    searchImages();
})