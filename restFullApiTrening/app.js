const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('welcome to my nodemon api');
});

app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`)
})