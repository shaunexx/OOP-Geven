class SmartDevice {
  constructor(brand) {
    if (new.target === SmartDevice) {
      throw new Error("Cannot create a SmartDevice directly");
    }

    this.brand = brand;
  }

  turnOn() {
    throw new Error("turnOn() must be implemented");
  }
}

class Smartphone extends SmartDevice {
  turnOn() {
    console.log(`${this.brand} phone is turning on!`);
  }
}

const phone = new Smartphone("Samsung");
phone.turnOn();