const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/*", (req, res) => {
    res.sendFile('index.html', {root: 'views'})
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
