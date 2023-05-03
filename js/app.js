

const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeIcon");
const menu = document.getElementsByClassName("menu");
console.log(menu.length);

menuButton.addEventListener("click" , ()=>{

    if(menu[0].classList.contains('transformationForward')){
        menu[0].classList.remove('transformationForward');
    }
    menu[0].classList.add("transformationBack");

});

closeButton.addEventListener('click' , ()=>{

    menu[0].classList.remove('transformationBack');
    menu[0].classList.add('transformationForward');

});

