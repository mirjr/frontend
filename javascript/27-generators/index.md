# Generators nima?

**Generators** - har chaqirganda ketma-ketlikda `iterable` object sifatida qiymat qaytaradigan funksiyalar. Masalan,

```javascript
function* generateNumber() {
  yield 1;
  yield 2;
  return 3;
}

// Generator funksiya iterable "generator object" qaytaradi
let generator = generateNumber();

generator.next(); // {value: 1, done: false}
generator.next(); // {value: 2, done: false}
generator.next(); // {value: 3, done: true}
```
