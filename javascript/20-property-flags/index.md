# Property flags va descriptors nima?

**Property flags** - bu obyekt propertiysi ichidagi quyidagi yashirin attributlar (flags):

1. **writable** - `true` bo'lsa property qiymatini o'zgartirsa bo'ladi, `false` bo'lsa yo'q.
2. **enumerable** - `true` bo'lsa shu property `loop` qilinganda ko'rinadi, `false` bo'lsa yo'q.
3. **configurable** - `true` bo'lsa propertyni o'chirsa bo'ladi, `flag`-larni o'zgartirsa bo'ladi, `false` bo'lsa yo'q. `False` qilingandan so'ng qayta `true` qilib bo'lmaydi.

**Property descriptor** - bu `Object.getOwnPropertyDescriptor(obj, propName)` va `Object.getOwnPropertyDescriptors(obj)` metodlaridan qaytadigan qiymat (tepadagi flaglar va qiymatlarni ko'rsatadi). Property flaglarni o'zgartirish uchun `Object.defineProperty(obj, propName, descriptor)` yoki `Object.defineProperties(obj,{...props})` metodlaridan foydalaniladi.
