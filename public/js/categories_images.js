import {properties} from "./properties.js";

getData();

async function getData() {
    const response = await fetch(properties.categoriesUrl)
    const data = await response.json();
    length = data.content.length;

    let temp = "";
    for (let i = 0; i < length; i++) {
        temp += `<div class="category_image" id="category_image">
            <img class="image" src="${properties.imagesServerUrl}/${data.content[i].image}"/>
            <div class="image-overlay" id="image-overlay">
            <div class="image-overlay-text">${data.content[i].name}</div>
            </div>
        </div>`;

    }
    document.getElementById('content__title').insertAdjacentHTML('afterbegin', temp);
}