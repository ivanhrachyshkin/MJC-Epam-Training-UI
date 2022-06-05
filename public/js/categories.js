getData();

async function getData() {
    const response = await fetch('http://192.168.43.65:8080/categories')
    const data = await response.json();
    length = data.content.length;

    let temp = "";
    for (let i = 0; i < length; i++) {
        temp += "<option>" + data.content[i].name + "</option>";
    }

    document.getElementById('category').insertAdjacentHTML('beforeend', temp);
}