const username = document.getElementById("un");
const fullname = document.getElementById("fn");
const password = document.getElementById("pw");
const password2 = document.getElementById("cpw");
const confirm2 = document.getElementById("confirm");
const submit = document.getElementById("submit-btn");

function changeLine(fromInput, toInput) {
  fromInput.addEventListener("keypress", function onEvent(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      toInput.focus();
    }
  });
}

changeLine(fullname, username);
changeLine(username, password);
changeLine(password, password2);
changeLine(password2, confirm2);

function validasipw() {
  if (password.value != password2.value) {
    password2.setCustomValidity("Password anda tidak cocok");
  } else {
    password2.setCustomValidity("");
  }
}
password.onchange = validasipw;
password2.onfocus = validasipw;

submit.addEventListener("click", function (event) {
  if (username.value == "" || fullname.value == "" || password.value == "" || password2.value == "" || confirm2.checked == false) {
    event.preventDefault();
    alert("Semua harus diisi ya");
    return false;
  } else {
    return true;
  }
});
