import {properties} from "./properties.js";

let page = 0;

async function loadMore() {
    const response = await fetch(properties.giftsUrl + page);
    const data = await response.json();
    length = data.content.length;

    let temp2 = "";
    for (let i = 0; i < length; i++) {
        console.log(data.content[i].image)
        temp2 += `<div class="card"> 
            <img src="${properties.imagesServerUrl}/${data.content[i].image}"  width="180" height="220" alt="${data.content[i].id}"/>
        </div>`
    }

    document.getElementById('container').insertAdjacentHTML('beforeend', temp2);
    page++;

}

// Detect when scrolled to bottom.
window.addEventListener('scroll', () => {
    console.log(window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if (window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight) {
        loadMore();
    }
})

loadMore();