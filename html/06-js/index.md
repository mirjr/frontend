# JavaScript fayllarini ulash tartibi qanday?

1. JavaScript fayllar body tegi oxirida yoki head tegi ichida
2. JavaScript fayllar kerakli qismi body tegi oxirida, qolganini asinxron yuklash yoki hammasini asinxron yuklash

- `async` yuklanishi (fetch) bilan ishlaydi (execution), `HTML parsning`-ni bloklaydi va ishlab bo'lgach HTML parsing davom etadi.

- `defer` yuklanayotganda (fetch) HTML parsing bloklanmaydi, HTML to'liq yuklanib bo'lgach `js` fayl ishlaydi (execution).

- Oddiy script fayllarini ulaganimizda `fetch` va `execution` jarayonlarida HTML parsing bloklanadi

  ![JavaScript files loading](https://www.corewebvitals.io/static/img/s/js-defer-vs-async-vs-blocking.png)
