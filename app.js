function register(){

let email=document.getElementById("email").value
let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

if(!email || !user || !pass){

alert("Заполните все поля")
return

}

let account={
email:email,
user:user,
pass:pass
}

localStorage.setItem("account",JSON.stringify(account))

alert("Аккаунт создан")

location.href="login.html"

}


function login(){

let login=document.getElementById("login").value
let pass=document.getElementById("pass").value

let acc=JSON.parse(localStorage.getItem("account"))

if(!acc){

alert("Аккаунт не найден")
return

}

if((login==acc.email || login==acc.user) && pass==acc.pass){

alert("Вход выполнен")

localStorage.setItem("logged","true")

location.href="index.html"

}

else{

alert("Неверные данные")

}

}
