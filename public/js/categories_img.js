getData();
getData2();

async function getData() {
    const response = await fetch('http://192.168.43.65:8080/categories')
    const data = await response.json();
    length = data.content.length;

    let temp = "";
    for (let i = 0; i < length; i++) {
        temp += `<div id="category_image">
            <img src="http://127.0.0.1:8887/${data.content[i].image}"  width="70" height="90"/>
        </div>`;

    }
    document.getElementById('content__title').insertAdjacentHTML('afterbegin', temp);
}

async function getData2() {
    const response = await fetch('http://192.168.43.65:8080/gifts?page=0&size=10&sort=id,ASC')
    const data = await response.json();
    length = data.content.length;

    let temp2 = "";
    for (let i = 0; i < length; i++) {
        temp2 += `<div class="card"> 
            <img src="http://127.0.0.1:8887/${data.content[i].image}"  width="180" height="220"/>
        </div>`
    }

    document.getElementById('container').insertAdjacentHTML('afterbegin', temp2);
}