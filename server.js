const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const news = require("./seed/news");
const products = require("./seed/products");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { page: "Home", news });
});

app.get("/news/:id", (req, res) => {
  const { id } = req.params;
  const currentNews = news.find((x) => x.id == id);
  if (currentNews === undefined) {
    res.redirect("/*");
  } else {
    res.render("news", { page: "News", ...currentNews });
  }
});

app.get("/contact", (req, res) => {
  res.render("contact", { page: "Contact" });
});

app.get("/products", (req, res) => {
  res.render("products", { page: "Products" });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/*", (req, res) => {
  res.status(404).render("notfound", { page: "Not Found" });
});
app.listen(port, () => {
  console.log(`Server started at: http://localhost:${port}`);
});
