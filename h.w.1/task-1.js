// Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

let initials = sortedInitials(userNames);

function sortedInitials(arr){
    return arr.slice().map((user) => user = user.split(' ').map((nameItem) => nameItem = nameItem[0]).join('.')).sort();
}

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]