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
    this.wing = wing;
  }
}
class Mamalias extends Animal {
  constructor(legs, ear, eays) {
    super(legs, ear, eays);
  }
}

const falcon = new Birds(2, 2, 2, 2);
const dog = new Mamalias(4, 2, 2);

console.log(dog.sayAbout());


class Book {
  title = '';
  yili = 0
  constructor(title, yili){
    this.title = title;
    this.yili = yili
  }
  aboutBook() {
    return `${this.title}, ${this.yili}`
  }
}

const book1 = new Book("0 dan 1 gacha", 2021);