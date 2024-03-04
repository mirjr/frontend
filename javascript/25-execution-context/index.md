# Execution Context

**Execution Context** - bu har bir block kod uchun JavaScript tomonidan ochiladigan malumotlar bloki bo'lib, ayni damda ishlayotgan kod uchun kerak bo'lgan barcha malumotlarni o'zida jamlaydi. Masalan, `this` kalit so'zi, o'zgaruvchilar, funksiyalar va hkz.

> Execution Context ikki turda bo'ladi: `Global` va `Function` Execution Context

Har bir EC ikki bosqichga (phase) bo'linadi:

1. **Creation phase** (yasalish bosqichi) - bu bosqichda quyidagilar ro'y beradi:

   1.1. O'zgaruvchi va funksiyalar `declaration`-larini saqlash

   1.2. `Scope chain` yasalishi

   1.3. `this` kalit soz'iga qiymat berilishi

2. **Execution phase** - kodni ishlatish bosqichi, o'zgaruvchilarga qiymat berish.

# Lexical environment

Lexical environment - ayni damda ishlab turgan `Execution Context`-da ishlatilgan `variable/function`-lar saqlanadigan joy. Kod qayerdaligiga qarab ichma-ich kirib ketgan bo'ladi.

# Sope

**Scope** - o'zgaruvchi va funksiyalar qayerda ko'rinish/ko'rinmasligini aniqlab beruvchi tushuncha (global, local, block).
