# JacaScriptda modullar qanday ishlaydi?

Modullar katta JS dastur kodlarini import/export orqali qismlarga bo'lib ishlatishdir. Bunda har bir modul alohida fayl bo'ladi. Har bir alohida fayl o'zidan funksiya, class, o'zgaruvchi va boshqalarni tashqariga export qiladi yoki boshqa fayldan import qilingan modulni ishlatadi. Bu orqali kodimiz tushunarli, qayta ishlatishga oson va yaxshi strukturaga ega bo'ladi.

Oddiy "JS script"lardan "modul JS script"larning farqi:

1. Modul fayllar avtomatik ravishda `use strict` ishlatadi
2. Har bir modulda alohida scope mavjud
3. `type=module` bo'lgan fayllar avtomatik `defer` attributini ham ishlatadi
4. `this` kalit so'zi `undefinded`-ga teng bo'ladi
