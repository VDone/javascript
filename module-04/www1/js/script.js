// console.log(1<2);
// console.log(1>2);
// console.log(5>=1+4);
// console.log(5<=2+4);
// let a=1;
// let b='1';
// console.log(a=b);
// console.log(a==b);
// console.log(a===b);
// let a=1;
// let b=2;
// console.log();
// let month = +prompt('Введи номер місяця');
// console.log(month);
// if (month === 12 || month === 1 || month === 2) {
//     console.log('Зима')
// }
// else if (month === 3 || month === 4 || month === 5) {
//     console.log('Весна')
// }
// else if (month === 6 || month === 7 || month === 8) {
//     console.log('Літо')
// }
// else if (month === 9 || month === 10 || month === 11) {
//     console.log('Осінь')
// }
// let luckyNumber = 8;
// switch (luckyNumber) {
//     case 1:
//         console.log('it is one');
//         brake;
//     case 8:
//         console.log('this is 8');
//         brake;
//     case 7:
//         console.log('You win');
//         brake;
//     default:
//         console.log('error');
//         brake;
// }
// let color = prompt('Wright color?');
// let result = color === 'white' ? 'Day' : 'Night';
// console.log(result);
// let resort = +prompt('Введите число, от 1 до 3-х. 1 - Сответсвует курорту taba, 2 - курорту sharm, 3 - курорту hurgada.');
// switch (resort) {
//     case 1:
//         alert('Вы выбрали курорт taba');
//         break;
//     case 2:
//         alert('Вы выбрали курорт sharm');
//         break;
//     case 3:
//         alert('Вы выбрали курорт hurgada');
//         break;
//     default:
//         alert('Внимание! Введено число, варианта курорта для которого не было!');
//         break;
// }
// console.log(Math.floor(Math.random()*10));
// let year = +prompt('Enter year');
// let century = Math.ceil((year+1)/100);
// alert(century);

// let arr = [];
// let a = new Array();

// let guess = prompt('Вгадайте тваринку: cat, dog, rabbit, bird, fish?');
// let animals = ["cat","dog","rabbit","bird","fish"];
// let compNum = Math.floor(Math.random()*animals.length);
// console.log(compNum);
// let compAnimal = animals[compNum];
// console.log(compAnimal);
// guess === compAnimal ? alert('Вгадав') : alert(`Невгадав ${compAnimal}`);

// let quotes = ['Почніть робити те, що потрібно. Потім робіть те, що можливо. І ви раптом виявите, що робите неможливе. – Св.Франциск Асізський','Ніщо не є більш обтяжливим для мудрої людини і ніщо не доставляє йому більшого занепокоєння, ніж необхідність витрачати на дрібниці і непотрібні речі більше часу, ніж вони того заслуговують. – Платон', 'Кращий спосіб почати робити – перестати говорити і почати робити. – Уолт Дісней', 'Ваш час обмежений, не витрачайте його, проживаючи чуже життя. Не попадайтеся на гачок віровчення, яке існує на уявленнях інших людей. Не дозволяйте поглядам інших заглушати свій власний внутрішній голос. І дуже важливо мати мужність слідувати своєму серцю та інтуїції. Вони, так чи інакше, вже знають, що ви дійсно хочете зробити. Все інше – другорядне. – Стів Джобс','Ваш мозок може все. Абсолютно все. Головне, переконати себе в цьому. Руки не знають, що вони не вміють віджиматися, ноги не знають, що вони слабкі. Це знає ваш мозок. Переконавши себе в тому, що ви можете все, ви зможете дійсно все. – Роберт Кіосакі', 'Ви отримуєте від життя лише те, що наважуєтеся попросити. Не бійтеся підвищувати планку. – Опра Уїнфрі', 'Щаслива людина занадто задоволена сьогоденням, щоб занадто багато думати про майбутнє. – Альберт Эйнштейн','Іноді щось може йти не так, як хотілося-б, але ви не повинні зупинятися. – Майкл Джордан','Будь собою, інші ролі зайняті. – Оскар Уайльд'];
// let quotesNum = Math.floor(Math.random()*quotes.length);
// let compQuotes = quotes[quotesNum];
// alert(`${compQuotes}`)

// for (let i = 0; i <= 10; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//     }else{
//         continue
//     }
// }
// let animals = ["cat","dog","rabbit","bird","fish"];
// for (let i = 0, max=animals.length; i < max; i++) {
//     if (i===2) {
//         continue
//     }
//     console.log(animals[i])
// }
// let empty = [];
// let teamNumber = +prompt('Enter here your number');
// let teamAmount = +prompt('How much members do you have?')
// for(let i = 0; i < teamNumber;i++){
//     let first = [];
//     for(let a = 1;a <= teamAmount;a++) {
//        first.push(a+i*teamAmount);
//         console.log(first);
//    }
//     empty.push(first);
// }
// console.log(empty);

// let enterPass;
// const pass = 'qwerty123';
// for (let n = 1; n <= 3; n++) {
//     enterPass = prompt('Введите пароль');
//     if(enterPass === pass){
//         alert('Добро пожаловать!');
//         break;
//     } else if(enterPass !== pass && n < 3 && enterPass !== null) {
//         alert(`Неверный пароль, у вас осталось ${3-n} попыток`);
//     } else if(enterPass !== pass && n === 3 && enterPass !== null) {
//         alert('У вас закончились попытки, аккаунт заблокирован!');
//     } else if(enterPass === null) {
//         break;
//     }
// }
// console.log(enterPass);

/*
  Написать скрипт, который проверяет произвольную строку 
  и находит самое длинное слово в строке. 
*/

// const string = "May the force be with you helloooooo";
// let longestWord;
// let wordLength = 0;
// let newString = string.split(' ');
// console.log(newString);
// for (let i = 0; i < newString.length; i++) {
//         if (newString[i].length > wordLength){
//             wordLength = newString[i].length;
//             longestWord = newString[i];
//         }
// }
// console.log(longestWord);
/*
  Создайте игру угадай число.
  Есть массив чисел numbers, содержащий "верные" числа.
  
  Числа в массиве всегда идут по возрастанию, 
  1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Пусть prompt говорит
  "Введите цифру между x и y", где x и y соотвественно самый
  маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, 
  необходимо проверить что было введено.
  Преобразовать input в числовой тип и проверить число ли это.
  
  Если нет - выводим alert с сообщением о том,
  что было введено не число.
  
  Если да - проверить содержит ли в себе массив numbers это число.
  
  Если содержит - выводим alert с сообщением 
  'Поздравляем, Вы угадали!'.
  
  Есл не содержит - выводим alert с сообщением 
  'Сожалеем, Вы не угадали!'.
*/
// const numbers = [12, 15, 25, 37, 41];
// let enter = +prompt(`Введите цифру между ${numbers[0]} и ${numbers[numbers.length-1]}`);
// console.log(typeof enter);
// if (enter*enter === Math.pow(enter,2)) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers.includes(enter)){
//             alert('Поздравляем, Вы угадали!');
//             break;
//         } else {
//             alert('Сожалеем, Вы не угадали!');
//             break;
//         }
//     }
// } else {
//     alert('Было введено не число.');
// }
/*
  Напишите цикл, который предлагает, через prompt,
  ввести число, большее 100. 
  
  Если посетитель ввёл другое число – 
  попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо 
  посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
*/

// for (let i = 0; i < Infinity; i++) {
//     let input = prompt('Введите число болеше 100');
//     if (input !== null && +input > 100) {
//         break;
//     } else if (input !== null && +input < 100) {
//         alert('Введите еще раз число болеше 100');
//     } else if (input === null) {
//         break;
//     }
// }

// let number = prompt('Введіть число більше за 100');
// for (let i = 0; i <= Infinity; i++) {
//    if(number >= 100) {
//        alert('Ви ввели нормальне число');
//        break;
//    }
//    else if(number === null) {
//        break
//    }
//    else {
//        number = prompt('Спробуйте ще раз') ;
//        console.log(number);
//    }
// }
/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt 
    и сохраняет их в массиве.
  
  - Заканчивает запрашивать числа, как только посетитель 
    введёт пустую строку, не число или нажмёт Cancel.
  
  - При этом ноль 0 не должен заканчивать ввод, 
    это разрешённое число.
  
  - Выводит сумму всех значений массива.
    "Сумма: <сумма всех значений в массиве>"
*/

// let arr = [];

// function vdcalc() {
//   console.log('text');
// }
// vdcalc();
// function vdadd(){
//   console.log(5+6);
// }
// vdadd();
// function vdcalc(params) {
  
// }
// function showText() {
//   let a=5;
//   let b=6;
//   return a+b;
// }
// console.log(showText());

// function calc(number1, number2) {
//   return number1 + number2;
// }
// console.log(calc(5,10));
// console.log(calc(20,30));

// function minus(a, b) {
//   return a - b;
// }
// console.log(minus(5,10));
// function showText(name = 'Jim', days = 30) {
//   return `${name} has trial version ${days} days`;
// }
// console.log(showText('John', 20));

// function stringPoli(string) {
//   let stringRevers = string.split('');
//   stringRevers = stringRevers.reverse();
//   stringRevers = stringRevers.join('');
// return string === stringRevers) {
//   console.log('true');
//   } else {
//   console.log('false');
//   }
// }
// stringPoli('lol');

// function stringPoli(string) {
//   string = string.toLowerCase();
//   console.log(string);
//   string = string.split(',');
//   string = string.join('');
//   console.log(string);
//   string = string.split('.');
//   string = string.join('');
//   console.log(string);
//   string = string.split(' ');
//   string = string.join('');
//   console.log(string);
  // string = string.split('/');
  // string = string.join('');
  // console.log(string);
  // string = string.split('\\');
  // string = string.join('');
  // console.log(string);
  // string = string.split('(');
  // string = string.join('');
  // console.log(string);
  // string = string.split(')');
  // string = string.join('');
  // console.log(string);
  // string = string.split(')');
  // string = string.join('');
  // console.log(string);
//   let stringRevers = string.split('');
//   stringRevers = stringRevers.reverse();
//   console.log(stringRevers);
//   stringRevers = stringRevers.join('');
//   console.log(stringRevers);
// return string === stringRevers;
// }
// console.log(stringPoli('A man, a plan, a canal. Panama'));

// function checkPalindrome(string) {
//   let modString = string.toLowerCase().split(' ').join('').split(',').join('').split('.').join('');
//   let palindrom = modString.split('').reverse().join('');
//   if (modString === palindrom) {
//       return true
//   } else {
//       return false
//   }
//   // return modString === palindrom ? true : false;
  // return modString === palindrom;
// }

/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/
// function getPx(str) {
//   if (typeof str !== 'string') {
//     return null;
//   } 
//     return str = parseFloat(str);
// }
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null

/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/

// function findLongestWord(string) {
// let longestWord;
// let wordLength = 0;
// let newString = string.split(' ');
// console.log(newString);
// for (let i = 0; i < newString.length; i++) {
//         if (newString[i].length > wordLength){
//             wordLength = newString[i].length;
//             longestWord = newString[i];
            
//         }
//     } 
//     return longestWord;
// }

// // Вызовы функции для проверки
// console.log(
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'

// console.log(
//   findLongestWord("Google do a roll")
// ); // вернет 'Google'

// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'force'

/*
  Создайте функцию titleCase(str), которая 
  получает строку и возвращает предоставленную строку 
  с первой буквой каждого слова, заглавными. 
  Остальные буквы слова должны быть не заглавными.
*/

// function titleCase(str) {
//   if (typeof str !== 'string'){
//     return;
//   } let lowCa = str.toLowerCase();
//   lowCa = lowCa.split(' ');
//   let newArr = [];
//   for (let word of lowCa) {
//     let wordUpp = word.replace(word[0], word[0].toUpperCase());
//     newArr.push(wordUpp);
//   }
//   newArr = newArr.join(' ');
//   return newArr;
// }

// // Вызовы функции для проверки
// console.log( 
//   titleCase("I'm a little tea pot")
// ); // вернет "I'm A Little Tea Pot"

// console.log(
//   titleCase("sHoRt AnD sToUt")
// ); // вернет "Short And Stout".

// console.log(
//   titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
// ); // вернет "Here Is My Handle Here Is My Spout".

/*  
  Есть массив уникальных чисел uniqNumbers.
  
  Написать функцию, addUniqNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqNumbers только уникальные,
  а повторяющиеся игнорирует.
*/

// const uniqNumbers  = [2, 1, 4, 9];
// function addUniqNumbers() {
//   // console.log(arguments);
//   let arr = Array.from(arguments);
//   console.log(arr);
//   for (let number of arr) {
//     if (!uniqNumbers.includes(number)){
//       uniqNumbers.push(number);
//     }
//   }
// }

// // Вызовы функции для проверки
// addUniqNumbers(1, 2, 3);
// console.log(uniqNumbers); // будет [2, 1, 4, 9, 3]

// addUniqNumbers(12, 2, 3, 19);
// console.log(uniqNumbers); // будет [2, 1, 4, 9, 3, 12, 19]

// addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(uniqNumbers); // будет [2, 1, 4, 9, 3, 12, 19, 5, 8]

/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументов всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/

// function removeFromArray(arr) {
//   // console.log(arr);
//   // console.log(arguments);
//   let newArr = Array.from(arguments);
//   newArr.shift();
//   console.log(newArr);
//   for (let number of newArr) {
//     if (arr.includes(number)){
//       // arr.split('number');
//       // arr.join('');
//       let index = arr.indexOf(number);
//       arr.splice(index, 1);
//     }
//   }
//   return arr;
// }

// // Вызовы функции для проверки
// console.log(removeFromArray([1, 2, 3, 4, 5], 2, 4)); // вернет [1, 3, 5]

// console.log(
//   removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // вернет [12, 8, 17]