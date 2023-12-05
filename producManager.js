class ProductManager {
  constructor() {
    this.products = [];
  }
  static id = 0;

  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.some((item) => item.code === code)) {
      console.log(`el codigo ${code} esta repetido`);
      return;
    }

    const newProd = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (!Object.values(newProd).includes(undefined)) {
      ProductManager.id++;
      this.products.push({
        ...newProd,
        id: ProductManager.id,
      });
    } else {
      console.log("Todos los campos son obligatorios");
    }
  }
  getProducts() {
    return this.products;
  }

  findProductsById(id) {
    const product = this.products.find((productos) => productos.id === id);
    !product ? console.log("Not Found") : console.log(product);
    return;
  }
}

const productos = new ProductManager();
console.log(productos.getProducts());

productos.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

productos.addProduct(
  "producto prueba_1",
  "Este es un producto prueba_1 ",
  201,
  "Sin imagen_1",
  "abc124",
  24
);

console.log(productos.getProducts());

productos.findProductsById(2);
