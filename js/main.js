
const form = document.querySelector("form")
const username = document.getElementById("username")

const password = document.getElementById("password")
const confirmPassword = document.getElementById("password2")
const error = document.querySelector("form-control small")
const success = document.querySelector("form-control small2")

function verifyPassword(){
    let pw = document.getElementById("password").value;  
    let pw2 = document.getElementById("password2").value;  
    if(pw!==pw2){
        alert("password not matching")
    }
}