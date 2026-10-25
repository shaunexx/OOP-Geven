class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class OrderItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  subtotal() {
    return this.product.price * this.quantity;
  }
}

class Order {
  constructor() {
    this.items = [];
  }

  add(product, quantity) {
    this.items.push(new OrderItem(product, quantity));
  }

  show() {
    let total = 0;

    for (const item of this.items) {
      console.log(
        `${item.product.name} x ${item.quantity} = ₱${item.subtotal()}`
      );

      total += item.subtotal();
    }

    console.log(`\nTotal: ₱${total}`);
  }
}

// Create products
const notebook = new Product("Notebook", 40);
const ballpen = new Product("Ballpen", 20);
const paper = new Product("Bond Paper", 5);

// Create an order
const order = new Order();

order.add(notebook, 3);
order.add(ballpen, 5);
order.add(paper, 10);

// Display the order
order.show();
