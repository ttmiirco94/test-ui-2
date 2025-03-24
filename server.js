const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/test", async (req, res) => {
    const requestBody = req.body;
    const response = {response: true, requestBody};
    res.json(response);
});

app.post("/bankpaket-basic", async (req, res) => {
    const requestBody = req.body;
    const response = {response: true, bankpaketEndpoint: 'basic', requestBody};
    res.json(response);
});

app.post("/bankpaket-plus", async (req, res) => {
    const requestBody = req.body;
    const response = {response: true, bankpaketEndpoint: 'plus', requestBody};
    res.json(response);
});

app.post("/bankpaket-zero", async (req, res) => {
    const requestBody = req.body;
    const response = {response: true, bankpaketEndpoint: 'zero', requestBody};
    res.json(response);
});

app.post("/bankpaket-young", async (req, res) => {
    const requestBody = req.body;
    const response = {response: true, bankpaketEndpoint: 'young', requestBody};
    res.json(response);
});

app.listen(3001, () => {
    console.log("Server läuft auf http://localhost:3001");
});