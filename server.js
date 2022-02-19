const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const news = require("./seed/news");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { page: "Home", news });
});

app.listen(port, () => {
  console.log(`Server started at: http://localhost:${port}`);
});
