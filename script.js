document.querySelector('.dis').style = "visibility:hidden;";

var a = document.getElementById('view');

a.addEventListener('click' , () =>{
    document.querySelector('.dis').style = "visibility: visible;";
    document.querySelector('.header').innerHTML += " Documentation";
});