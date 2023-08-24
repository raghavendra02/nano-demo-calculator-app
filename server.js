const express = require('express');
const log = require('ipfs-api/src/log');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello Calculator');
});

baseRouter.post('/add', (req, res) => {
    const first = Number(req.body.first);
    const second = Number(req.body.second);
    const result = first + second;
    res.json({ "result": result });
});


baseRouter.post('/subtract', (req, res) => {
    const first = Number(req.body.first);
    const second = Number(req.body.second);
    const result = first - second;
    res.json({ "result": result });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});