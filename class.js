class Car {
  constructor(name) {
    this.brand = name;
  }

  //method in a class
  present() {
    return "I have a " + this.brand;
  }
}

// inheritance

class Model extends Car {
  constructor(name, mod) { 
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ", " +"it is a "+  this.model;
  }
}

//object
const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());
