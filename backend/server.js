require('console-stamp')(console, 'HH:MM:ss.l');
const path = require("path");
const express = require("express");

const basePath = require("./helper/base-path.helper");
const errorController = require('./controllers/error.controller');
require('./scheduler');

const app = express();

app.use(express.json());

const productsRouter = require("./routes/products.router");

app.use(express.static(path.join(basePath, "public")));
app.use("/api/products", productsRouter);
app.use(errorController.notFound);

app.listen(3000, () => console.log('App Started! Listening on port 3000!'));
