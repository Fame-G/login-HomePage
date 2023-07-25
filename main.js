// let username = document.getElementById("username");
// let email = document.getElementById("email");
// let password = document.getElementById("password");

// let username = document.getElementById("username"),
//     email = document.getElementById("email"),
//     password = document.getElementById("password");

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes)

let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form");

errorMsg = document.getElementsByClassName("error");

// errorMsg = ["error", "error", "error"];

let successIcon = classes("success-icon");
let failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) =>{
    e.preventDefault();
  
    engine(email, 1, "Email cannot be blank");
    engine(username, 0, "Username cannot be blank");
    engine(password, 2, "Password cannot be blank");
})

/**
 * todo to avoid repetitive code
 */

let engine = (id, serial, message) => {
    if(id.value.trim() === ""){
        // todotrim is used to remove spaces that users might have inputed when filling out a form
        errorMsg[serial].innerHTML = message;
       failureIcon[serial].style.opacity ="1";
       successIcon[serial].style.opacity = "0";
    }
    else{
        errorMsg[serial].innerHTML = ""
        failureIcon[serial].style.opacity ="0";
        successIcon[serial].style.opacity = "1";
    }
}