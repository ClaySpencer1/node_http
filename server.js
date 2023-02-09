console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const http = require("http");
const { json } = require("stream/consumers");

// Finish setting up the server
const port = 3000;

// Creates a server object
http
  .createServer(function (req, res) {
    const url = req.url;
    res.setHeader("Content-Type", "text/html");
    const method = req.method;
    console.log("Request Made with this Method", req.method);
    const dataChunksArray = [];

    req.on("data", (chunk) => {
        dataChunksArray.push(chunk);
    });

    req.on("end", () => {
       const body = JSON.parse(Buffer.concat(dataChunksArray).toString());
       const responseBody = { method, url, body };

       res.write(JSON.stringify(responseBody));
       res.end();
    })

    if (url == "/") {
      res.statusCode = 200;
      res.write("<h1>Home: Clay's Crib</h1>");
    } else if (url == "/about") {
      res.statusCode = 200;
      res.write("About - I am Clay");
    }else if (url == "/contact"){
        res.statusCode = 200;
        res.write("<h1>Contact Me: Clay@fakeemail.com</h1>");
    }

    res.end();
  })
  .listen(3000);
