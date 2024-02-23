# Nechta Array metodlarini bilasiz, reduce va map farqi hamda ishlashi qanday?

Array & String metodlariga:
![Array & String methods](https://miro.medium.com/v2/resize:fit:1006/1*HJY_2vNKkNkqRQhLZcYlyg.png)

**Reduce** - malum bir arrayni olib, undan yagona qiymat chiqarib olishda foydalaniladi. Bu natijaga o'zining birinchi argumenti (accumulator) orqali erishadi. Yani, `accumulator` butun loop jarayonida biz qaytargan qiymat tasir orqali o'zgarib boradi va oxirgi qiymat sifatida qaytadi.

```javascript
let arr = [1, 2, 3, 4, 5];

let initialValue = 0;
let res = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(res);
```

**Map** - malum bir arrayni olib, uni ustida ishlab, yangi array qaytarishda ishlatiladi.
