const productData = require('../data/product-data');

class ProductsService {
  constructor() {
    this.products = [];
    this.addProducts();
  }

  addProducts() {
    this.products.push(productData.forEach((product) => {
      this.products.push(product);
    }));
  }

  async createProduct(data) {
    const newProduct = {
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async getProducts() {
    return new Promise((resolve) => {
      resolve(this.products);
    });
  }

  async getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.log('error')
    }
    if (product.isBlock) {
      console.log('error')
    }
    return product;
  }

  async updateProductById(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      console.log('error')
    } else {
      const product = this.products[index];
      if (product.isBlock) {
        console.log('error')
      }
      this.products[index] = {
        ...product,
        ...changes,
      };
      return this.products[index];
    }
  }

  async deleteProductById(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      console.log('error')
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;