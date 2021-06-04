

let a = document.querySelector('.navigation');
let gambBtn = a.querySelector('.navigation_wrapper_gamburger ');
let menu = a.querySelector('.navigation_wrapper_gamburger-menu');
   
const btn= gambBtn.addEventListener ('click', () => {
menu.classList.toggle('active')
});   




  