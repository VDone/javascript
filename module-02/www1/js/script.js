// 1) Створіть змінну num і надайте їй значення 3. Виведіть значення цієї змінної на екран за допомогою методу alert
// let num = 3;
// alert(num);
// 2) Створіть змінні a = 10 і b = 2. Виведіть на екран їх суму, різницю, добуток і частку (результат ділення)
// let a=10;
// let b=2;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// 3) Створіть змінні c = 15 і d = 2. Підсумуйте їх, а результат надайте змінної result. Виведіть на екран значення змінної result
// let c=15;
// let d=2;
// let result=c+d;
// console.log(result);
// 4) Створіть змінні a = 10, b = 2 і c = 5. Виведіть на екран їх суму.
// let a=10;
// let b=2;
// let c=5;
// console.log(a+b+c);
// 5) Створіть змінні a = 17 і b = 10. Відніміть від a змінну b і результат надайте зміннії c. Потім створіть змінну d, надайте їй значення 7. Складіть змінні c і d, а результат запишіть в змінну result. Виведіть на екран значення змінної result.
// let a=17;
// let b=10;
// let c=a-b;
// let d=7;
// let result=c+d;
// console.log(result);
// 6) Запитайте ім'я користувача за допомогою методи prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я
// %значення що отримали з prompt%'
// let name = prompt('Enter your name');
// alert('Yor name is ' + name + '?');
// 7) Запитайте у користувача число. Виведіть за допомогою alert квадрат цього числа.
// let number = prompt('Enter any number');
// alert(number*number);
// 8) Напишіть скрипт, який рахує кількість секунд в годині, в добі, в місяці і виведіть ці значення в консоль
// let hour = 3600;
// let day = hour*24;
// let month = day*30;
// console.log(hour, day, month);
// 9) Створіть три змінні - година, хвилина, секунда. З їх допомогою виведіть поточний час в форматі 'година: хвилина: секунда'.
// let hour = 22;
// let minute = 14;
// let second = 43;
// console.log(hour+':'+minute+':'+second);
// 10) Створіть змінну, надайте їй число. Зведіть це число в квадрат. Виведіть його на екран
// let a = 3;
// a = a * a;
// console.log(a);
// 11) Переробіть цей код так, щоб в ньому використовувалися операції + =, - =, * =, / =. Кількість рядків коду при цьому не повинно змінитися.

    // var num = 47;
    // num += 7;
    // num -= 18;
    // num *= 10;
    // num /= 15;
    // alert (num);

// 12) Переробіть цей код так, щоб в ньому використовувалися операції ++ і --. Кількість рядків коду при цьому не повинно змінитися.

    // var num = 10;
    // ++num;
    // ++num;
    // --num;
    // alert (num);
// 13) Створіть змінну str і надайте їй значення 'Hello World'. Виведіть значення цієї змінної на екран
// str = 'Hello World';
// alert(str);
// 14) Створіть змінні str1 = 'Hello,' і str2 = 'World!'. За допомогою цих змінних і операції додавання рядків виведіть на екран фразу 'Hello World'.
// str1 = 'Hello';
// str2 = ' World';
// alert(str1+str2);
// 15) Створіть змінну name і надайте їй ваше ім'я. Створіть змінну age і надайте їй ваш вік. Виведіть на екран 'Привіт, я  % Ім'я%!'Мені% Вік% років!'.
// name = 'Vasiliy';
// age = '37';
// alert('Hello, my name is ' + name + ' and I am ' + age);
// console.log(`Hello, my name is ${name} and I am ${age}`);
// 16) Створіть змінну str і надайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка виведіть на екран символ 'a', символ 'c', символ 'e'
// let str='abcde';
// console.log(str[0]);
// console.log(str[2]);
// console.log(str[str.length-1]);
// 17) Створіть змінну num і надайте їй значення '12345'. Знайдіть суму, різницю, добуток, частку цифр цього числа
// і виведіть ці значення в консоль
// let num = '12345';
// console.log((+num[0])+(+num[1])+(+num[2])+(+num[3])+(+num[4]));
// console.log(num[0]-num[1]-num[2]-num[3]-num[4]);
// console.log(num[0]*num[1]*num[2]*num[3]*num[4]);
// console.log(num[0]/num[1]/num[2]/num[3]/num[4]);
// 18) Дана рядок 'js'. Зробіть з неї рядок 'JS'.
// let str='js';
// console.log(str.toUpperCase());
// 19) Дана рядок 'JS'. Зробіть з неї рядок 'js'
// let str='JS';
// console.log(str.toLowerCase());
// 20) Дана рядок 'я вчу javascript!'. Знайдіть кількість символів в цьому рядку.
// let str='я вчу javascript!';
// console.log(str.length);
// 21) Дана рядок 'я вчу javascript!'. Вирежіте з неї слово 'вчу' і слово 'javascript' запишіть їх в змінні і виведіть в консоль
// let str='я вчу javascript!';
// console.log(str.substr(2, 4));
// console.log(str.substring(6, 16));
// 22) Дана рядок 'я вчу javascript!'. Знайдіть позицію підрядка 'вчу' і виведіть її в консоль
// let str='я вчу javascript!';
// console.log(str.indexOf('вчу'));
// 23) Дана рядок 'я вчу javascript!'. За допомогою методу split запишіть кожне слово цього рядка в окремий елемент масиву і виведіть в консоль
// let str='я вчу javascript!';
// console.log(str.split(' '));
// 24) Дана рядок 'я вчу javascript!'. За допомогою методу split запишіть кожен символ цього рядка в окремий елемент масиву і виведіть в консоль
// let str='я вчу javascript!';
// console.log(str.split(''));
// 25) 1) Створити 3 локальні змінні з іменами firstName, lastName і age.
//     2) В кожну змінну за допомогою діалогового вікна prompt надайте значення, яке введе користувач. У діалоговому вікні в якості повідомлення для відповідних змінних використовуйте фрази - "Введіть ім'я", "Введіть прізвище", "Введіть вік". Виведіть на екран фразу "Мене звати firstName моє прізвище lastName і мені стукноло age рочків" Використайте шаблонні стороки.
// let firstName, lastName, age;
// firstName = prompt('Введіть ім\'я');
// lastName = prompt('Введіть прізвище');
// age = prompt('Введіть вік');
// alert(`Мене звати ${firstName} моє прізвище ${lastName} і мені стукноло ${age} рочків.`);
// 26)Визначити який символ стоїть на на позиції 0, 4, 5 в 'Hello word!'
// let str='Hello word!';
// console.log(str[0]);
// console.log(str[4]);
// console.log(str[5]);
// 27) Створити 3 строки і обєднати їх через concat
// let str1='java';
// let str2='script';
// let str3=' forever';
// console.log(str1.concat(str2, str3));
// 28) Чи закінчується сторока "Hello world, welcome to the universe." на universe. і  на universe
// let str='Hello world, welcome to the universe.';
// console.log(str.endsWith("universe."));
// console.log(str.endsWith("universe"));
// 29) Чи починається сторока "Hello world, welcome to the universe." на universe. і  на Hello
// let str='Hello world, welcome to the universe.';
// console.log(str.startsWith("universe."));
// console.log(str.startsWith("Hello"));
// 30) Чи є в строці 'я вчу javascript!' слово javascript і CSS
// let str='я вчу javascript!';
// console.log(str.includes('javascript'));
// console.log(str.includes('CSS'));

// const firstRow = 'qwertyuiop[]';
// const secondRow = 'asdfghjkl;\'\\';
// const thirdRow = 'zxcvbnm,./';
// const firstRowLength = firstRow.length;
// const secondRowLength = secondRow.length;
// const thirdRowLength = thirdRow.length;
// firstRow.charAt(0);
// firstRow.charAt(firstRow.length-1);
// secondRow.charAt(0);
// secondRow.charAt(secondRow.length-1);
// thirdRow.charAt(0);
// thirdRow.charAt(thirdRow.length-1);
// let leftBracket=(firstRow.indexOf('['));
// let rightBracket=(firstRow.indexOf(']'));
// console.log(
// `firstRowLength = ${firstRowLength}
// secondRowLength = ${secondRowLength}
// thirdRowLength = ${thirdRowLength}
// leftBracket = ${leftBracket}
// rightBracket = ${rightBracket}`);
