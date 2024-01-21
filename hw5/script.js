// Поиск элементов

// 1)
const tableId = document.getElementById('age-table');

// 2)
const labelAll = document.getElementById('age-list')
console.log(labelAll);

// 3)
const tdElement = document.querySelector('table td');
console.log(tdElement)

// 4)
const byName = document.getElementsByName('search')[0];
console.log(byName);

// 5)
const getFirstInput = document.querySelector('form input');
console.log(getFirstInput);

// 6)
const getLastInput = document.querySelector('form')[1];
console.log(getLastInput);

// Тег в комментарии
// 1)
alert(document);

// Что выведет этот код?

let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert(body.firstChild.data); 

// выведет BODY