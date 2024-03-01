# Functional programming

**Functional programming** - bu `declarative programmming paradimn`-lar sinfiga mansub bo'lib, dasturni `pure` funksiyalarga bo'lishorqali tuzishni ilgari suradi. Bu orqali kod tushunarli, boshqarishga oson, qayta ishlatsa bo'ladigan va testlashga oson bo'ladi. Functional programming-ning quyidagi konseptlari mavjud: `immutability`, `pure dunctions`, `higher order functions`, `first-class functions`, `currying`, `recursion`, `composition`, `refercial transparency` va boshqalar.

1. **Immutability** - bu dasturdagi `data(object, array...)`-larni o'zgartirmasdan ishlash. Bunda `Array`-lar bilan ishlaganda `mutable` obyektlardan iloji boricha qochiladi. Masalan:

   ```javascript
   const numbers = [1, 2, 3, 4];
   const doubledNums = doubleNums(numbers);

   function doubleNums(nums) {
     return nums.map((num) => num + num);
   }
   ```

2. **Pure va impure** - qaytaradigan natijasi `side effect`-lardan xoli va har safar bir xil `input`-ga bir xil `output` qaytaradigan funksiyalar, `impure` esa teskarasi.

   ```javascript
   let a = 1;
   let b = 2;
   function Plus(a, b) {
     return a + b;
   }
   Plus(a, b); // pure function

   function Minus() {
     return a - b;
   }
   Minus(); // impure function
   ```

   `Side effect` - funksiya tashqarisidan nimanidir ishlatish. Tashqari bilan to'g'ridan to'g'ri aloqa.

3. **First-class functions (citizens)** - bu `variable`-ga bersa bo'ladigan, argument sifatida bersa bo'ladigan, boshqa funksiyadan return qilsa bo'ladigan va property bersa saqlay oladigan funksiyalar (funksiya obyektlardek ishlay olishi).

   ```javascript
   function Test() {
     return "Hello World!";
   }

   Test.name; // Test
   Test.newProp = "Goodbye World";
   Test.newProp; // Goodbye World
   ```

4. **Higher order functions** - bu argument sifatida funksiya oladigan yoki qaytaradigan funksiyalar. Misol, `Array.prototype.map`, `Array.prototype.reduce` va boshqalar.

   ```javascript
   // argument sifatida funksiya oladigan
   [1, 2, 3].map((v) => v + 1);

   // funksiya qaytaradigan
   function A() {
     return function B() {
       return true;
     };
   }
   ```

5. **Currying** - funksiyalarni bir nechta qismlarga bo'lib, alohida-alohida argument berib chaqirish usuli. Masalan:

   ```javascript
   add(1, 2, 3); // simple function
   add(1)(2)(3); // curried function

   function add(a) {
     return (b) => {
       return (c) => a + b + c;
     };
   }
   add(1)(2)(3); // 6
   ```

6. **Recursion** - `Functional programming`-da bir funksiya o'zini-o'zi chaqirishiga nisbatan aytiladi va bunday funksiyalar `recursive function` deyiladi. Masalan, ushbu 1 dan N songacha bo'lgan sonlar ko'paytmasini topish uchun `recursion`-dan foydalanib ko'ramiz.

   📢 _P.S: Recursive funksiyalar dasturni ishlashiga yomon tasir qilishini inobatga olib, hamma joyda ham ishlatish tavsiya etilmaydi._

   ```javascript
   function multiplyUpTo(num) {
     if (num === 1) return 1;
     return multiplyUpTo(num - 1) * num;
   }
   multiplyUpTo(4); // 24
   ```

7. **Callback function** - argument sifatida boshqa funksiyaga berilib, shu funksiya ichida chaqiriladigan funksiyalar `callback` funksiyalar deyiladi.

   ```javascript
   function myFunc(cbFunc) {
     cbFunc();
   }

   myFunc(() => console.log("Callback function"));
   ```

8. **Function Composition** - bir `data` ustida natijaga yetguncha, funksiyalar ketma-ketlikda `Callback` va `Currying` uslubidan foydalanib ishlashiga aytiladi.

9. **Pipe function** - `Function Composition` bilan deyarli bir xil, faqat ustunligi berilgan funksiyalar ketma-ketlikda ishlaydi.

   ```javascript
   const pipe =
     (...fns) =>
     (data) =>
       fns.reduce((data, fn) => fn(data), data);

   const addMeat = (osh) => osh + "+ Meat";
   const addEgg = (osh) => osh + "+ Egg";

   const osh = pipe(addMeat, addEgg);

   console.log(osh("Osh")); // Osh + Meat + Egg
   ```

10. **Referential Transparency** - biror qiymat qaytaradigan funksiyani argument sifatida boshqa funksiyaga bergan holatdagi natija, shu funksiya qaytaradigan qiymatni argument sifatida bergandagi bilan bir xil bo'lishi kerak, shunda birinchi funksiya `Referential Transparency` deyiladi.

    ```javascript
    const sum = (a, b) => a + b;
    const showSum = (num) => `Result is: ${num}`;

    showSum(sum(2, 3));
    showSum(5);
    ```
