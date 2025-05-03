const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.headers);
  res.send("<h1>Hello World!</h1>");
});

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Example POST route
app.post("/submit", (req, res) => {
  console.log("Received POST request on /submit");
  console.log("Request Body:", req.body);
  // Process the data from req.body here
  res.status(200).json({ message: "Data received", receivedData: req.body });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
