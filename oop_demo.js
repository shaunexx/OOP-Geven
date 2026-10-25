/* 1. ABSTRACTION */
class SmartDevice {
  constructor(brand) {
    if (new.target === SmartDevice) {
      throw new Error("Cannot create SmartDevice directly!");
    }

    this.brand = brand;
  }

  powerOn() {
    throw new Error("Child class must implement powerOn()");
  }
}

/* 2. INHERITANCE */
class SmartPhone extends SmartDevice {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  /* 3. POLYMORPHISM / METHOD OVERRIDING */
  powerOn() {
    console.log(
      `${this.brand} ${this.model} phone is turning on!`
    );
  }
}

class SmartWatch extends SmartDevice {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  /* METHOD OVERRIDING */
  powerOn() {
    console.log(
      `${this.brand} ${this.model} watch is turning on!`
    );
  }
}

/* 4. ARRAY OF OBJECTS */
const devices = [
  new SmartPhone("Samsung", "Galaxy"),
  new SmartWatch("Apple", "Watch")
];

/* DISPLAY ALL DEVICES */
devices.forEach(device => {
  device.powerOn();
});
