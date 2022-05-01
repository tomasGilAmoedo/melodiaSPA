const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('Hello World is to basic tho')
});

const port = 8888;

app.listen(port, () => {
    console.info(`app listening on port http://localhost:${port}`);
})
