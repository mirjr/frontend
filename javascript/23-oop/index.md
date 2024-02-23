# JavaScript OOP va uning prinsplarini bilasizmi?

**OOP** - bu dasturdagi kodlarni vazifasiga qarab, `object`-lar orqali turli qismlarga ajratib, kodlarni takrorlanishini oldini olib, qayta ishlatish imkonini beradigan `Programming Paradigm`.

Uning 4 ta prinsplari mavjud:

1. **Inheritence** - bir `Class`-ni ikkinchi `Class`-ga meros qoldirish yoki bir `Class`-dan ikkinchi `Class`-da foydalanish (`extends`, `super`).

2. **Encapsulation** - bu `Class` tashqariga o'zidan nimani ko'rsatishi va ko'rsatmasligiga aytiladi. Ya'ni, `public`, `private` va `protected` bo'lgan `property` va `method`-lar orqali qilinadigan amallar (`getter`/`setter`-lar ham).

3. **Abstraction** - bu `Class` faqat ishlatilinadigan `property` va `method`-larni tashqariga chiqaradi, keraksizlarini o'z ichida qoldiradi. Ya'ni orqa fondagi ishlar orqa fonda bajariladi.

4. **Poliymorphism** - bu metodlar sharoitga qarab har xil qiymat qaytarishi. Masalan, `sayName` metodi har bir `User`-ning ismini chiqaradi, aynan bittasini emas. Metod qayerda ishlatilsa shu yerga qarab to'g'ri ishlaydi. `Polymorphism`-ni ikki qisimga bo'lsak bo'ladi:
   1. Parameter-based (Constructordan kelgan qiymatlar);
   2. Inheritance-based (Metodlarni ustidan yozish)
