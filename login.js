var database ={
    [
        localStorage.setItem("mail"),
        localStorage.setItem("password")
    ]:
}

var mail = prompt("enter your mail");
var password = prompt("enter your password"); 

function login(mail, password) {
    if  (mail == database.localStorage.setItem("mail") &&
       password == database.localStorage.setItem("password"))
     {  window.open('job.html'); 
}   else {
        alert("wrong credentials, try again")
    }
}