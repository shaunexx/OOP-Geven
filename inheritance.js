class  SmartDevice {
    constructor(brand, model) {
        this.model = model;
        this.brand = brand;

    }
    powerOn(){
        console.log(`${this.brand} ${this.model} is turning on...`);
    }
    
}

class SmartPhone extends SmartDevice {
    constructor(brand, model, os) {
        super(brand, model);
        this.os = os;
    }
 powerOn(){
    console.log(
        `SmartPhone ${this.brand} ${this.model} is booting up ${this.os}`
    );
 }
}

class SmartWatch extends SmartDevice {
    constructor(brand, model, strapMaterial) {
        super(brand, model);
        this.strapMaterial = strapMaterial;
    }
    powerOn(){
        console.log(
            `Smartwatch ${this.brand} ${this.model} with ${this.strapMaterial}
            strap is lighting up`
        );
    }
}

const devices =[
    new SmartPhone("Samsung", "Galaxy s25", "Android"),
    new SmartWatch("Apple", "Watch Series 9", "Silicone"),
    new SmartPhone("Apple", "iPhone 18 pro" , "IOS"),
];

devices.forEach((device) => {
    device.powerOn()
});