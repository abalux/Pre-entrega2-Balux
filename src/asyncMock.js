const products = [
  {
    id: "1",
    name: "Florence Skirt",
    price: 1000,
    category: "skirts",
    img: "https://i.pinimg.com/564x/91/9f/28/919f28516eb5c38d2e76994d418884ae.jpg",
    stock: 25,
    description: "Descripcion de Florence Skirt",
  },
  {
    id: "2",
    name: "Sabrina Dress",
    price: 800,
    category: "dresses",
    img: "https://i.pinimg.com/564x/62/8e/87/628e878369b65ddbb63b32ba961864f8.jpg",
    stock: 16,
    description: "Descripcion de Sabrina Dress",
  },
  {
    id: "3",
    name: "Basic Coat",
    price: 1200,
    category: "coats",
    img: "https://i.pinimg.com/236x/a7/29/32/a72932583a6eb320f8d10a5902f000f0.jpg",
    stock: 0,
    description: "Descripcion de Basic Coat",
  },
  {
    id: "4",
    name: "Liberty Shirt",
    price: 1200,
    category: "shirts",
    img: "https://i.pinimg.com/236x/5b/7a/96/5b7a96fc7f14d0a99213d04ca6952ca2.jpg",
    stock: 3,
    description: "Descripción de Liberty Shirt",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId));
    }, 1000);
  });
};
