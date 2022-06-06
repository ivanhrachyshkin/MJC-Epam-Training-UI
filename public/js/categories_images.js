getData();

async function getData() {
    const response = await fetch('http://192.168.43.65:8080/categories')
    const data = await response.json();
    length = data.content.length;

    let temp = "";
    for (let i = 0; i < length; i++) {
        temp += `<div class="category_image">
            <img src="http://127.0.0.1:8887/categories/${data.content[i].image}"  width="90" height="90"/>
        </div>`;

    }
    document.getElementById('content__title').insertAdjacentHTML('afterbegin', temp);
}