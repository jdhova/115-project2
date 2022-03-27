
   function verifyPassword(){
    let pw1 = document.getElementById("password").value;
    let pw2 = document.getElementById("password2").value;

    if(pw1!==pw2){
        alert("password not matching")
    }
}
