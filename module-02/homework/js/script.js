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
let groupNum = +prompt('Введите число участников группы, это должно быть целое число.');
let resortTaba = 6;
let resortSharm = 15;
let resortHurgada = 25;
let resort;
if (groupNum < 0 || parseInt(groupNum) !== groupNum) {
    alert('Вы ввели не целое число, поедет полтора землекопа?');
}
else if (groupNum <= 6) {
    resort = confirm('Для вашей группы есть место в отеле Taba, зарезервировать Вам место?');
    if (resort === true) {
        alert('Спасибо место зарезервировано.');
        resortTaba = resortTaba - groupNum;
        console.log(resortTaba);
    } else if (resort === false) {
        resort = confirm('Для вашей группы есть место в отеле Sharm, зарезервировать Вам место?');
        if (resort === true) {
        alert('Спасибо место зарезервировано.');
        resortSharm = resortSharm - groupNum;
        console.log(resortSharm);
        } else if (resort === false) {
            resort = confirm('Для вашей группы есть место в отеле Hurgada, зарезервировать Вам место?');
            if (resort === true) {
            alert('Спасибо место зарезервировано.');
            resortHurgada = resortHurgada - groupNum;
            console.log(resortHurgada);
            } else {
                alert('Или вы ошиблись, тогда нажмите F5 и начните поиск сначала или вы очень привередливы.');
            }
        }
    }
}
else if (groupNum > 6 && groupNum <= 15) {
    resort = confirm('Для вашей группы есть место в отеле Sharm, зарезервировать Вам место?');
    if (resort === true) {
        alert('Спасибо место зарезервировано.');
        resortSharm = resortSharm - groupNum;
        console.log(resortSharm);
    } else if (resort === false) {
        resort = confirm('Для вашей группы есть место в отеле Hurgada, зарезервировать Вам место?');
        if (resort === true) {
            alert('Спасибо место зарезервировано.');
            resortHurgada = resortHurgada - groupNum;
            console.log(resortHurgada);
        }else {
            alert('Или вы ошиблись, тогда нажмите F5 и начните поиск сначала или вы очень привередливы.');
        }
    }
}
else if (groupNum > 15 && groupNum <= 25) {
    resort = confirm('Для вашей группы есть место в отеле Hurgada,зарезервировать Вам место?');
    if (resort === true) {
        alert('Спасибо место зарезервировано.');
        resortHurgada = resortHurgada - groupNum;
        console.log(resortHurgada);
    }else {
        alert('Или вы ошиблись, тогда нажмите F5 и начните поиск сначала или вы очень привередливы.');
    }
}
else if (groupNum > 25) {
    alert('Вам нужна казарма! Мест нет!');
}