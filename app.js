const express = require("express");


const server = express();

server.get("/", (req, res) => {
    res.write("<h1>Home: Clay's Pad</h1>");
    res.status(200);
    res.end();
});

server.listen(3000, () => {
    console.log("Server Started");
});