# Iterables nima degani?

**Iterables** - qiymatlari `for...of` orqali olinsa bo'ladigan `object`-lar. _Built-in iterable_-larga `array`, `string`, `Map` va `Set` misol bo'ladi.
O'zimizning `iterable`-larimizni `[Symbol.iterator]` metodini yozish orqali qilsak bo'ladi. Bu metod ichida `next()` metodi yozilgan `object` qaytaradi va `for...of` aynan shu `object`-dan foydalanadi. `next()` metodi `{done: true/false, value: qiymat}` ko'rinishida `object` qaytarishi kerak, `done: true` ga teng bo'lsa `iteration` tugashi kerak. Masalan:

```javascript
const obj = {
  name: "Someone",
  age: 22,
  [Symbol.iterator]: function() {
    let index = 0;
    let values = Object.values(this);
    return {
      next() {
        if (index < values.length) {
          const value = values[index];
          index++
          return {done: false, value: value}
        } else {
          return {done true, value: values[index]}
        }
      }
    }
  }
}
```
