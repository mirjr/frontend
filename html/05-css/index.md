# CSS fayllarini ulash tartibi qanday?

Dastur talabidan kelib chiqib har xil yo'llari bor:

1. CSS stillarni head tegi ichida yozish
2. CSS stillarning kerakli qismi (Critical CSS) head tegi ichida, qolganini asinxron yuklash:

   ```html
   <!-- Critical CSS -->
   <style>
     body {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
     }
   </style>

   <!-- Asinxron yuklash -->
   <link
     rel="preload"
     href="style.css"
     as="style"
     onload="this.rel='stylesheet'"
   />
   ```
