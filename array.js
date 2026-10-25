const products = [
  { name: "Laptop", price: 25000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Headphones", price: 800 },
];

// First activity - pop()
products.pop();

console.log("After pop:", products);

// Second activity - filter()
const affordableProducts = products.filter(
  product => product.price < 2000
);

console.log("Products below 2000:", affordableProducts);
