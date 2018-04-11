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
let resort = +prompt('Введите число, от 1 до 3-х. 1 - Сответсвует курорту taba, 2 - курорту sharm, 3 - курорту hurgada.');
switch (resort) {
    case 1:
        alert('Вы выбрали курорт taba');
        break;
    case 2:
        alert('Вы выбрали курорт sharm');
        break;
    case 3:
        alert('Вы выбрали курорт hurgada');
        break;
    default:
        alert('Внимание! Введено число, варианта курорта для которого не было!');
        break;
}
