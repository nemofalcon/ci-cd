const express = require("express");
const app = express();
app.get("/", function (req, res) {
 return res.send("Hello World");
});// listen to port 7000 by default

app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running");
});module.exports = app;