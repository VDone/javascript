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
