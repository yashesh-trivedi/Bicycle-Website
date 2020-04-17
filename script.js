let nextButton = document.getElementById("prev-btn");
let prevButton = document.getElementById("next-btn");

console.log(nextButton);

let frontWheels = document.querySelectorAll(".front-wheel");
let backWheels = document.querySelectorAll(".back-wheel");

console.log(frontWheels);

// nextButton.onclick = function moveToNextCycle() {
//     frontWheels.forEach(element => {
//         console.log(element);
//         element.style = "animation: 5s rotate-wheel linear infinite";
//     });

//     backWheels.forEach(element => {
//         console.log(element);
//         element.style = "animation: 5s rotate-wheel linear infinite";
//     });

// };  

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