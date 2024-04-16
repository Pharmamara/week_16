//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

function makeOne() {
  const paragraph = document.getElementById("practicum");
  //Ваш код
  const formsAll = document.forms.length;
  paragraph.textContent = `на этой странице ${formsAll} формы`;
}
document.querySelector(".b-1").addEventListener("click", makeOne);

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeTwo() {
  const paragraphTwo = document.getElementById("practicum2");
  //Ваш код
  const firstFormName = document.forms[0].name;
  paragraphTwo.textContent = firstFormName;
}
document.querySelector(".b-2").addEventListener("click", makeTwo);

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeThree() {
  const paragraphThree = document.getElementById("practicum3");
  //Ваш код
  const lastFormName =
    document.forms[document.forms.length - 1].getAttribute("name");
  paragraphThree.textContent = lastFormName;
}
document.querySelector(".b-3").addEventListener("click", makeThree);

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

function makeFour() {
  const paragraphFour = document.getElementById("practicum4");
  //Ваш код
  const forms4 = document.forms;
  const formNames = [];
  for (let i = 0; i < forms4.length; i++) {
    const formName = forms4[i].name;
    formNames.push(formName);
  }
  const formNamesToString = formNames.join(", ");
  paragraphFour.textContent = formNamesToString;
}
document.querySelector(".b-4").addEventListener("click", makeFour);

//Задание 5 исправить!
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

function makeFive() {
  const paragraphFive = document.getElementById("practicum5");
  //Ваш код
  let forms5 = document.forms;
  let thirdForm = document.forms.formThree;
  let elemNum = formThree.elements.length;
  paragraphFive.textContent = `в форме ${forms5.formThree.name} ${elemNum} элемента/ов`;
}
document.querySelector(".b-5").addEventListener("click", makeFive);

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

function makeSix() {
  const paragraphSix = document.getElementById("practicum6");
  //Ваш код
  let forms = document.forms;
  let secondForm = document.forms.formTwo;
  let elemNum6 = formTwo.elements.length;
  paragraphSix.textContent = `в форме ${forms[1].name} ${elemNum6} элементов`;
}
document.querySelector(".b-6").addEventListener("click", makeSix);

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

function makeSeven() {
  const paragraphSeven = document.getElementById("practicum7");
  //Ваш код
  const forms = document.forms;
  const formTwo7 = document.forms.formTwo;
  const formTwoElements = formTwo7.elements;
  let elementsList = "";

  for (const element of formTwoElements) {
    elementsList += `-${element.name} `;
  }
  paragraphSeven.textContent = elementsList;
}
document.querySelector(".b-7").addEventListener("click", makeSeven);

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

function makeEight() {
  const paragraphEight = document.getElementById("practicum8");
  //Ваш код
  const forms = document.forms;
  const formOne8 = document.forms.formOne;
  const formOneElements = formOne8.elements;
  let elementsList = "";
  for (element of formOneElements) {
    elementsList += `-${element.name} `;
  }
  paragraphEight.textContent = elementsList;
}

document.querySelector(".b-8").addEventListener("click", makeEight);

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

function makeNine() {
  const paragraphNine = document.getElementById("practicum9");
  //Ваш код
  const formThree = document.forms[2];
  const formThreeElements = formThree.elements;
  let elementsList = "";
  for (element of formThreeElements) {
    elementsList += `-${element.name} `;
  }
  paragraphNine.textContent = elementsList;
}

document.querySelector(".b-9").addEventListener("click", makeNine);

//Задание 10 ЗДЕСЬ, ВЕРОЯТНО, ОШИБКА В ЗАДАНИИ (В ФОРМЕ 3 НЕТ РАДИОКНОПОК)
//Выведите на экран значенеие radio кнопки третьей формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

function makeTen() {
  const paragraphTen = document.getElementById("practicum10");
  //Ваш код
  const radioButton = lastForm.querySelector('input[type="radio"]');
  paragraphTen.textContent = radioButton.value;
}

document.querySelector(".b-10").addEventListener("click", makeTen);

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

function makeEleven() {
  const paragraphEleven = document.getElementById("practicum11");
  //Ваш код
  const formOne11 = document.forms[0];
  const formOneElements = formOne11.elements;
  const select = formOneElements["firstSelect"];
  let optionsValues = [];
  for (let i = 0; i < select.length; i++) {
    optionsValues.push(select.options[i].value);
  }
  paragraphEleven.textContent = optionsValues;
}

document.querySelector(".b-11").addEventListener("click", makeEleven);

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

function makeTwelve() {
  const paragraphTwelve = document.getElementById("practicum12");
  //Ваш код
  const formTwo12 = document.forms[1];
  const checkboxes = formTwo12.querySelectorAll('input[type = "checkbox"]');
  let checkboxesList = "";
  for (let checkbox of checkboxes) {
    checkboxesList += `${checkbox.id} *** `;
  }
  paragraphTwelve.textContent = `форма 2 содержит чекбоксы со следующими ID: ${checkboxesList}`;
}

document.querySelector(".b-12").addEventListener("click", makeTwelve);

// Задание 13 смотри в форму после нажатия кнопки Отправить!
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

function checkButton(e) {
  e.preventDefault();
  const paragraphThirteen = document.getElementById("practicum13");
  //Ваш код
  const lastForm13 = document.forms[3];
  const radioButton13 = lastForm13.elements.namedItem("fourthName");
  if (radioButton13.checked) {
    paragraphThirteen.textContent = "Кнопка выбрана";
  } else {
    paragraphThirteen.textContent = "Кнопка НЕ выбрана";
  }
}

document.querySelector(".b-13").addEventListener("click", checkButton);

//Задание 14
//Выведите на экран название выбранного варианта в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным любой вариант формы
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Напишите проверку, которая используя условный оператор (if) будет выводить в элемент paragraphFourteen название выбранного варианта

function checkOption() {
  const paragraphFourteen = document.getElementById("practicum14");
  //Ваш код
  const formOne14 = document.forms[0];
  if (formOne14.elements["firstSelect"].value === "Опция 1") {
    paragraphFourteen.textContent = "опция 1";
  } else if (formOne14.elements["firstSelect"].value === "Опция 2") {
    paragraphFourteen.textContent = "опция 2";
  } else {
    paragraphFourteen.textContent = "опция 3";
  }
}
document.querySelector(".b-14").addEventListener("click", checkOption);

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
  //Ваш код
  const formOne15 = document.forms[0];
  const selectFormOne15 = formOne15.elements["firstSelect"];
  selectFormOne15.options[2].selected = true;
}

makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
  //Ваш код
  /* проще всего вот так: 
  document.getElementById("checkbox3").checked = true;*/
  const formTwo16 = document.forms[1];
  const checkbox16 = formTwo16.elements["checkboxThree"];
  checkbox16.checked = true;
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную formOne
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener("submit", function (event) {
  event.preventDefault(); //Отмена отправки

  const formOne17 = document.forms[0];

  //Ваш код
  const formOneFirstName = formOne17.elements.firstName.value;
  const formOnefirstEmail = formOne17.elements.firstEmail.value;
  if (formOneFirstName == "" || formOnefirstEmail == "") {
    errorMessage.textContent = "Заполните пустые поля!";
  } else {
    errorMessage.textContent = "";
  }
});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

//Ваш код
formOne.addEventListener("submit", function (event) {
  event.preventDefault(); //Отмена отправки
  document.forms[0].reset();
});

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие change для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor
const formOne19 = document.forms[0];
const select19 = document.getElementById("firstSelect");
formOne19.addEventListener("change", function () {
  if (select19.options[0].selected === true) {
    document.body.style.backgroundColor = "red";
  } else if (select19.options[1].selected === true) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "blue";
  }
});

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие input для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp: /^[^\s@]+@[^\s@]+.[^\s@]+$/), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.
const formOne20 = document.forms.formOne;
const emailInput = document.forms.formOne.elements.firstEmail;
const emailRegExp = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
const errorMessage = document.getElementById("errorMessage");
const emailError = document.createElement("p20").after(emailInput);

//Ваш код
emailInput.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let hasError = false;
  emailError.style.display = "none";
  if (validateEmail(emailInput.value) === false) {
    emailError.textContent = "Введите корректный email.";
    emailError.style.display = "block";
    hasError = true;
  }
  if (hasError === false) {
    alert("Форма успешно отправлена!");
  }
});
function validateEmail(email) {
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

//Задание 21
//При отправке второй формы выполните проверку всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.forms.formTwo.addEventListener("submit", function (evt) {
  const checkbox1 = document.getElementById("checkbox1").checked;
  const checkbox2 = document.getElementById("checkbox2").checked;
  const checkbox3 = document.getElementById("checkbox3").checked;
  let errorMessage21 = document.getElementById("result21");
  //Ваш код
  if (!checkbox1 && !checkbox2 && !checkbox3) {
    evt.preventDefault();
    errorMessage21.textContent = "выберите один из вариантов";
  } else {
    errorMessage21.textContent = "";
  }
});

//Задание 22
//При отправке третьей формы выполните проверку поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector(".b-22").onclick = function (event) {
  const nameInput = document.forms.formThree.elements.thirdName;
  let errorMessage22 = document.getElementById("result22");
  //Ваш код
  if (nameInput.value === "") {
    event.preventDefault();
    errorMessage22.textContent = "введите имя";
  } else {
    errorMessage22.textContent = "";
  }
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled
const input23 = document.forms.lastForm.elements.fourthName;
const button23 = document.forms.lastForm.elements.fourthButton;
button23.disabled = true;

input23.addEventListener("change", function (event) {
  if (!input23.checked) {
    event.preventDefault();
    button23.disabled = true;
  } else {
    button23.disabled = false;
  }
});

//Задание 24
//Найдите все поля ввода на странице (querySelectorAll) и установите им атрибут "placeholder" со значением "Введите данные" (используйте метод forEach).

document.querySelector(".b-24").addEventListener("click", function () {
  //Ваш код
  const inputFields = document.querySelectorAll(
    'input[type="text"], [type="email"], [type="url"], [type="password"]'
  );
  inputFields.forEach((inputField) => {
    inputField.setAttribute("placeholder", "Введите данные");
  });
});
//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

/*document.querySelector(".b-25").addEventListener("click", function () {*/
//Ваш код
const inputs = document.querySelectorAll(
  'input[type="text"], [type="email"], [type="url"], [type="password"]'
);

// Добавляем слушатель события на каждый input
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.style.outline = "2px solid green";
  });

  input.addEventListener("blur", () => {
    input.style.outline = "none";
  });
});

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector(".b-26").addEventListener("click", function (event) {
  event.preventDefault();
  //Ваш код
  const result26 = document.getElementById("result26");
  const nameInput = document.forms[2].elements.thirdName;
  result26.textContent = nameInput.placeholder;
});

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll(".secondForm input");
const result27 = document.getElementById("result27");
formTwoInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    //Ваш код
    result27.textContent = "Изменение внесено";
  });
});

//Задание 28
//При выборе любой из опций выпадающего списка в третьей форме (ОШИБКА В ЗАДАНИИ: ВЫПАДАЮЩИЙ СПИСОК ЕСТЬ ТОЛЬКО В ПЕРВОЙ ФОРМЕ) отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormOne = document.getElementById("firstSelect");
const result28 = document.getElementById("result28");
selectFormOne.addEventListener("change", function () {
  //Ваш код
  const selectedOptions28 = document.forms[0].elements.firstSelect;
  if (selectedOptions28.options[0].selected === true) {
    result28.textContent = `${selectedOptions28.options[0].value} выбрана`;
  } else if (selectedOptions28.options[1].selected === true) {
    result28.textContent = `${selectedOptions28.options[1].value} выбрана`;
  } else if (selectedOptions28.options[2].selected === true) {
    result28.textContent = `${selectedOptions28.options[2].value} выбрана`;
  }
});
