import {properties} from "./properties.js";

getData();

async function getData() {
    const response = await fetch(properties.categoriesUrl)
    const data = await response.json();
    length = data.content.length;

    let temp = "";
    for (let i = 0; i < length; i++) {
        temp += "<option>" + data.content[i].name + "</option>";
    }

    document.getElementById('category').insertAdjacentHTML('beforeend', temp);
}