function verifyPassword(){
    let pw = document.getElementById("password").value;  
    let pw2 = document.getElementById("password2").value;  
    if(pw!==pw2){
        alert("password not matching")
    }
}

// // ------cursor style-----------
// var cursor = document.getElementById("cursor");

// document.onmousemove = function(e){     //this e gives the coordinates of x and y axis of the cursor div//

//     cursor.style.left = (e.pageX - 25) + "px";       //position of x coordinate of cursor
//     cursor.style.left = (e.pageY - 25) + "px";       //position of Y coordinates '' '' ''
// //because the circle is 50px we minus 25 from both x and y coordinate position  to centre it on cursor
// };