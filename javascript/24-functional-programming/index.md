# Functional programming

**Functional programming** - bu `declarative programmming paradimn`-lar sinfiga mansub bo'lib, dasturni `pure` funksiyalarga bo'lishorqali tuzishni ilgari suradi. Bu orqali kod tushunarli, boshqarishga oson, qayta ishlatsa bo'ladigan va testlashga oson bo'ladi. Functional programming-ning quyidagi konseptlari mavjud: `immutability`, `pure dunctions`, `higher order functions`, `first-class functions`, `currying`, `recursion`, `composition`, `refercial transparency` va boshqalar.

1. **Immutability** - bu dasturdagi `data(object, array...)`-larni o'zgartirmasdan ishlash. Bunda `Array`-lar bilan ishlaganda `mutable` obyektlardan iloji boricha qochiladi. Masalan:
    ```javascript
    const numbers = [1,2,3,4];
    const doubledNums = doubleNums(numbers);

    function doubleNums(nums) {
        return nums.map(num => num + num);
    }
    ```

2. **Pure va impure** - qaytaradigan natijasi `side effect`-lardan xoli va har safar bir xil `input`-ga bir xil `output` qaytaradigan funksiyalar, `impure` esa teskarasi.
    ```javascript
    let a = 1;
    let b = 2;
    function Plus(a, b) {
        return a + b;
    }
    Plus(a, b)  // pure function

    function Minus() {
        return a - b;
    }
    Minus()    // impure function
    ```

    `Side effect` - funksiya tashqarisidan nimanidir ishlatish. Tashqari bilan to'g'ridan to'g'ri aloqa.

3. **First-class functions (citizens)** - bu `variable`-ga bersa bo'ladigan, argument sifatida bersa bo'ladigan, boshqa funksiyadan return qilsa bo'ladigan va property bersa saqlay oladigan funksiyalar (funksiya obyektlardek ishlay olishi).
    ```javascript
    function Test() {
        return "Hello World!";
    }

    Test.name   // Test
    Test.newProp = "Goodbye World";
    Test.newProp    // Goodbye World
    ```

4. **Higher order functions** - bu argument sifatida funksiya oladigan yoki qaytaradigan funksiyalar. Misol, `Array.prototype.map`, `Array.prototype.reduce` va boshqalar.
    ```javascript
    // argument sifatida funksiya oladigan
    [1,2,3].map(v => v + 1);

    // funksiya qaytaradigan
    function A() {
        return function B() {
            return true;
        }
    }
    ```

5. **Currying** - funksiyalarni bir nechta qismlarga bo'lib, alohida-alohida argument berib chaqirish usuli. Masalan:
    ```javascript
    add(1,2,3)  // simple function
    add(1)(2)(3)    // curried function

    function add(a){
        return (b) => {
            return (c) => a + b + c;
        }
    }
    add(1)(2)(3) // 6
    ```
    