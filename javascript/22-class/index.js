class Animal {
  legs = 0;
  ear = 0;
  eays = 0;
  constructor(legs, ear, eays) {
    this.legs = legs;
    this.ear = ear;
    this.eays = eays;
  }
  sayAbout() {
    return `Bu hayvonning oyog'i ${this.legs}, ko'zi ${this.eays}.`;
  }
}

class Birds extends Animal {
  wing = 0;
  constructor(legs, ear, eays, wing) {
    super(legs, ear, eays);
    this.wing = this.legs;
  }
}
class Mamalias extends Animal {
  wing = 0;
  constructor(legs, ear, eays) {
    super(legs, ear, eays);
  }
}

const falcon = new Birds(2, 2, 2, 2);
const dog = new Mamalias(4, 2, 2);

console.log(dog.sayAbout());
