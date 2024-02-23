# Prototype nima, `__proto__` bilan farqi nimada?

`JavaScript`-da barcha obyektlarda yashirin `prototype` xossasi (object yoki null ga teng) mavjud. Qaysidir obyekt ichida biz qidirayotgan xossa bo'lmasa, JavaScript bu xossani prototype-dan qidiradi va topsa ishlatadi. Buni `Prototype Inheritance` deyiladi.

`__proto__` bu `getter/setter` bo'lib, obyekt prototypeini olishda yoki yangi qiymat berishda ishlatiladi.

Ammo Prototype xossasini set qilishning boshqa yangiroq usullari bor:
`Object.create(newProto, ?[descriptions])`,
`Object.getPrototypeOf(obj)`,
`Object.setPrototypeOf(obj, proto)`
