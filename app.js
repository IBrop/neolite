function register(){

let user = document.getElementById("user").value
let pass = document.getElementById("pass").value

localStorage.setItem("user",user)
localStorage.setItem("pass",pass)

alert("Аккаунт создан")

location.href="login.html"

}


function login(){

let user = document.getElementById("user").value
let pass = document.getElementById("pass").value

if(user == localStorage.getItem("user") &&
pass == localStorage.getItem("pass")){

alert("Вход выполнен")

location.href="ai.html"

}

else{

alert("Неверный логин")

}

}
