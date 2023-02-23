let btn = document.querySelector('.btn');
let dateText = document.querySelector('.btn-text');

/*
Зчитую данні с локал сторендж
перевіряю чи була активна темна тема 
*/
btn.textContent = localStorage.getItem('btnStatus') || 'Turn off';
dateText.textContent =  localStorage.getItem('statusDate') || 'No date';

if (localStorage.getItem('themeStatus')){
    theme.className = 'wrapper dark'
};

/*
Приводжу дату до потрібного формату
Роблю текст згідно вмісту кнопки відповідно до ТЗ
Записую в лока сторедж результат конкатенації тексту та значень дати та кнопки
додаю до текстового поля значення з локал сторедж
змінюю класс теми
Змінюю зміст кнопки після натискання та додаю стан теми до локал сторедж
записую значення тексту кнопки до локал сторедж
*/
function dateExchange (){
    let time = new Date();
    time = time.toLocaleString().split(',').join('');
    let btnText = btn.textContent[0].toLocaleLowerCase() + btn.textContent.slice(1);
    localStorage.setItem('statusDate', (`Last ${btnText}: ${time}`));
    dateText.textContent = localStorage.getItem('statusDate');
    theme.classList.toggle("dark");

    if (btn.textContent === 'Turn off'){
        btn.textContent = 'Turn on';
        localStorage.setItem('themeStatus', 'true');
    } else {
        btn.textContent = 'Turn off';
        localStorage.setItem('themeStatus', '');
    }
    
    localStorage.setItem('btnStatus', btn.textContent);
}

btn.addEventListener('click', dateExchange);