const btnRight = window.document.querySelector('.button-arrow._right');
const btnLeft = window.document.querySelector('.button-arrow._left');
const element = window.document.querySelector('.elements');
let pixels = 100;

btnRight.addEventListener('click', function(){
    pixels = pixels + 100;
    element.style =  `transform: translateX(${pixels}px);`;
})

btnLeft.addEventListener('click', function(){
    pixels = pixels - 100;
    element.style = `transform: translateX(${pixels}px);`;
})
