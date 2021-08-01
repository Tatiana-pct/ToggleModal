const btn = document.querySelector('.btn'); 
const modal = document.querySelector('.modal');
btn.addEventListener('click', () => {
let toggle = false;

if (toggle) {
    modal.style.opacity = 1;
}
else if (toggle === false) {
    modal.style.opacity = 0;
}
    
})

