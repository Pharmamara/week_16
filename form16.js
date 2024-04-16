/*function formValidation() {
  let uname = document.registration.username;
  let uage = document.registration.age;
  let uadd = document.registration.address;
  let uemail = document.registration.email;
  let passid = document.registration.passid;
  let uprofession = document.registration.profession;
  let umsex = document.registration.msex;
  let ufsex = document.registration.fsex;

  if (allLetter(uname)) {
    if (uAge(uage)) {
      if (alphanumeric(uadd)) {
        if (ValidateEmail(uemail)) {
          if (passid_validation(passid, 7, 12)) {
            if (professionselect(uprofession)) {
              if (validsex(umsex, ufsex)) {
              }
            }
          }
        }
      }
    }
  }
  return false;
}

function allLetter(uname) {
  let letters = /^[a-zA-Zа-яА-Я\s]{2,20}$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert(
      "Имя может включать в себя только буквы и пробелы, длина имени от 2 до 20 символов"
    );
    uname.focus();
    return false;
  }
}
function uAge(uage) {
  let age = /^[0-9]{1,3}$/;
  if (uage.value.match(age)) {
    return true;
  } else {
    alert("введите реальный возраст");
    uage.focus();
    return false;
  }
}

function alphanumeric(uadd) {
  let letters = /^[a-zA-Zа-яА-Я0-9\s]+$/;
  if (uadd.value.match(letters)) {
    return true;
  } else {
    alert("Адрес может включать в себя только буквы, цифры и пробелы");
    uadd.focus();
    return false;
  }
}

function ValidateEmail(uemail) {
  let mailformat = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("Вы ввели некорректный электронный адрес");
    uemail.focus();
    return false;
  }
}
function passid_validation(passid, mx, my) {
  let passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert("Пароль не может быть пустым / длина от " + mx + " до " + my);
    passid.focus();
    return false;
  }
  return true;
}
function professionselect(uprofession) {
  if (uprofession.value == "default") {
    alert("Выберите профессию из списка");
    uprofession.focus();
    return false;
  } else {
    return true;
  }
}
function validsex(umsex, ufsex) {
  x = 0;
  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }
  if (x == 0) {
    alert("Укажите пол");
    umsex.focus();
    return false;
  } else {
    alert("Данные успешно отправлены");
    document.forms.registration.reset();
    window.location.reload();
    return true;
  }
}*/
document.getElementById("agreeTerms").addEventListener("change", function () {
  let submitBtn = document.getElementById("submitBtn");
  let checkboxAgree = document.getElementById("agreeTerms");
  submitBtn.disabled = checkboxAgree.checked;
});
document.forms.registration.addEventListener("submit", function (evt) {
  const checkboxAgree = document.getElementById("agreeTerms").checked;
  const errorMessage = document.getElementById("error-message");

  if (!checkboxAgree) {
    evt.preventDefault();
    errorMessage.textContent = "Просим разрешить обработку персональных данных";
  } else {
    errorMessage.textContent = "";
  }
});
