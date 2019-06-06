const path = require("path");

const basePath = require("../helper/base-path.helper");
const fsJsonHelper = require("../helper/fs-json.helper");

const productsFile = path.join(basePath, "data", "products.json");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    return Product.fetchAll().then(products => {
      products.push(this);
      return fsJsonHelper.write(productsFile, products);
    });
  }

  static fetchAll() {
    return fsJsonHelper.read(productsFile).catch(err => {
      console.error(err);
      return [];
    });
  }
};
