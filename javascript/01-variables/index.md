# O'zgaruvchilar turlari va farqlari

JavaScriptda `var`, `let` va `const` o'zgaruvchilari mavjud. ES6-dan avval `var`-ning o'zi edi.

- `const` - o'zgarmas, block-scoped, hoisting ishlaydi, ammo xatolik beradi.
- `let` - o'zgaruvchi, block-scoped, hoisting ishlaydi, ammo xatolik beradi.
- `var` - o'zgaruvchi, function/local-scoped, hoisting ishlaydi, qiymati `undefined`. Global elon qilinsa `window` obyektiga yoziladi. Bir xil nom bilan qayta elon qilish mumkin (redeclaring).

```javascript
function myFunc() {
  var a = 1;
}

{
  let b = 2;
  const C = 3.14;
}
```
