let nextButton = document.getElementById("next-btn");
let prevButton = document.getElementById("prev-btn");
let frontWheels = document.querySelectorAll(".front-wheel");
let backWheels = document.querySelectorAll(".back-wheel"); 


nextButton.addEventListener('click',() => {
    for( let i = 0 ; i<frontWheels.length ; i++){
        frontWheels[i].classList.add('front-wheelanimate');
    }
})

prevButton.addEventListener('click', () => {
    for( let i = 0 ; i<frontWheels.length ; i++){
        backWheels[i].classList.add('back-wheelanimate');
    }
})