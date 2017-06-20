const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
//console.log(__dirname + '/../public');
//console.log(publicPath);

const app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`server is up at${port}`);
})