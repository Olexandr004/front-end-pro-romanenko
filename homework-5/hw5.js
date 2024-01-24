const userDate = prompt('В якому році Ви народилися?');

let userAge = 2024 - userDate;

switch (userDate) {
    case null:
    case (''):
        alert(`Шкода, що Ви не захотіли ввести свій рік народження.`);
        userAge = '(НЕ ВІДОМО!)';
        break;
}

const userCity = prompt(`В якому місті Ви живете?`)

switch (userCity) {
    case ('Київ'):
        alert(`Вам ${userAge} роки(ів). Ви живете в столиці України!`);
        break;
    case ('Вашингтон'):
        alert(`Вам ${userAge} роки(ів). Ви живете в столиці США!`);
        break;
    case ('Лондон'):
        alert(`Вам ${userAge} роки(ів). Ви живете в столиці Великої Британії!`);
        break;
    case null:
    case(''):
        alert(`Вам ${userAge} роки(ів). Шкода, що Ви не захотіли ввести своє місто.`);
        break;
    default:
        alert(`Вам ${userAge} роки(ів). Ви живете у місті ${userCity}!`);
}

const userHobbySport = prompt('Який вид спорта Вам подобається?');

switch (userHobbySport) {
    case ('футбол'):
        alert('Круто! Хочеш стати Андрієм Шевченко?');
        break;
    case ('бокс'):
        alert('Круто! Хочеш стати Олександром Усиком?');
        break;
    case ('волейбол'):
        alert('Круто! Хочеш стати Олегом Плотницьким?');
        break;
    case null:
    case (''):
        alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.');
        break;
    default:
        console.log(userHobbySport);
}