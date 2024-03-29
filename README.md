Зібрано за допомого WebPack;
Точка входу файл index.js, який знаходиться в папці src
Більш детально про налаштування збірки можна дізнатись у файлі webpack.config.js
Жива сторінка за посиланням: https://maksym-kovorotnyi.github.io/video_slider/

Як цей проєкт працює:

1. В корені проєкту створено файл index.html з основною розміткою та підключеними скриптами.
2. Далі в src/API/fetchVideo.js отримуємо безпосередньо об'єкт з даними про відео. Використано Vimeo API.
3. Оскільки, за умовами завдання, треба було створити розмітку зі списком з 8 елементів, а відео дано було 1-не, тому в папці helpers створено дві допоміжні функції:

- deepClone для глибокого копіювання об'єкта;
- localStorage, де написана логіка поміщення об'єкта в local storage;
  На даному етапі це працює так:
  - у файлі localStorage функція setDataToLocalStorage викликає API-функцію getVideo і ми отримуємо об'єкт з необхідними даними;
  - створюється змінна let localStorageData з пустим масивом;
  - далі за допомогою циклу for... 8 разі викликається deepClone для глибокого копіювання об'єкта та на кожній ітерації копія об'єкту
    поміщається в змінну let localStorageData з використання методу push;
  - коли цикл завершується змінна let localStorageData записується до local storage, де ми тепер маємо масив з відповідною кількістю об'єктів

4. Також, в папці helpers міститься допоміжна функція для створення розмітки, createMurkup, яку можна перевикористовувати (припускав, що вона знадобиться більше одного разу) та яка приймає 3 параметри:

- динамічні дані, які можна додати до розмітки;
- функцію з безпосередньо самою розміткою (файл з функцією, яка створює розмітку називається murkup.js);
- посилання на DOM-елемент в який необхідно розмітку додати;

за допомою createMurkup та масиву об'єктів з local storage я створив розмітку з 8-ми елементів які і відображаються на сторінці.

5. За умовами тестового необхідно було створити слайдер, для чого було використано невеличке розширення slick-carousel. За допомогою даного розширення було налаштовно відображення 4-ох елементів з 8-ми, які можна прогортати, натиснувши на відподні стрілки з обох боків.

6. Далі, було реалізовано модальне вікно (поп-ап) куди за допомогою тегу iframe, який пропоноють Vimeo, було додано їхній плеєр з основними налаштуванням. Логіка роботи модального вікна описана у файлі modal.js та працює наступним чином:

- функція handleModal виконує основному роботу, вона ж і викликається в головному скрипті index.js;
- handleModal отримує доступ до HTML-колекції елементів, за допомогою метод Array.from() перетворює їх на масив, за допомогою методу map() отримує доступ до кожного елемента масиву, вішає на нього слухач події "click";
- логіка відкриття/закриття модального вікна реалізована шляхом зміни властивості DOM-елемента display на "display: none" та "display: block" - відповідно. Крім того, при відкритті модального вікна вішаються два слухача подій "click" з логікою закриття модального вікна;
- функції закриття модального вікна винесені окремо та написані в тому ж файлі modal.js;
- після закриття модального вікна, з метою оптимізації, слухачі подій закриття - знімаються, оскільки вони потрібні тільки при відкритому плеєрі;

7. Відповідно до умов тестового необхідно було, також, реалізувати в модальному вікні (поп-апі) пагінацію. Логіка роботи пагінації написана у файлі pagination.js та по-суті складається з двох частин:

- перша частина - це створення розмітки пагінації, де за допомою циклу for... та методу createElement створється елемент "li" до якого за допомогою властивості classList, а також методу add додається загальний для всіх елементів пагінації клас "paginatinItem" та додатковий клас "active".
  Щодо додаткового класу "active", хочу зупинитись та розглянути більш детальніше. Він застосовується до того елементу пагінації, індекс якого, відповідає індексу елемента зі списку відео з основної сторінки. Я вирішив скористатись тим, що slick-carousel додає до кожного елементу основного списку id="slick-slide00", де останні два символи відповідають індексу елемента. Я передав вказаний id в якості параметру функції createPagination, що дозволило додати клас "active" до відповідного елементу зі списку пагінації.

- друга частина - це безпосередньо сама логіка пагінації, яка для візуального виділення місця в списку, де знаходиться користувач, використовує відповідну зміну класів для стилізації.
  Відображення ж відповідного відео здійснюється за допомогою властивості iframe.src, тобто плеєру, який надає Vimeo.
  Посилання, яке записується у згадану властивість, береться з масиву об'єктів, що зберігається в local storage, оскільки там в усіх об'єктах зберігається посилання на одне й теж відео, то воно і відображається. Проте, якби там був список з різними посиланнями, вони працювали б так само коректно та відображали відповідні відео.
