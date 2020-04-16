let nextButton = document.getElementById("prev-btn");
let prevButton = document.getElementById("next-btn");

console.log(nextButton);

let frontWheels = document.getElementsByClassName("front-wheel");
let backWheels = document.getElementsByClassName("back-wheel");

console.log(frontWheels);

nextButton.onclick = function moveToNextCycle() {
    frontWheels.forEach(element => {
        console.log(element);
        element.style = "animation: 5s rotate-wheel linear infinite";
    });

    backWheels.forEach(element => {
        console.log(element);
        element.style = "animation: 5s rotate-wheel linear infinite";
    });

};  
