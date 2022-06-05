const path = require('path')
const express = require('express');
const app = express();

const PORT = 3000;
const ROOT = 'views';

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: ROOT})
})

app.get("/main", (req, res) => {
    res.sendFile("main.html", {root: ROOT})
})

app.get("/checkout", (req, res) => {
    res.sendFile("checkout.html", {root: ROOT})
})


app.listen(PORT, () => console.log('Server is running...'))
