let nextButton = document.getElementById("next-btn");
let prevButton = document.getElementById("prev-btn");
let wheels = document.querySelectorAll(".wheel");
let cycleContainer = document.querySelector(".cycle-container");


///// Function to add and remove class from a list of elements(nodelist)
let addClassToNodeList = function(nodeList, className) {
    for (let node of nodeList) {
        if (!node.classList.contains(className)) {
            node.classList.add(className);
        }
    }
};

let removeClassFromNodeList = function(nodeList, className) {
    for (let node of nodeList) {
        if (node.classList.contains(className)) {
            node.classList.remove(className);
        }
    }
};

nextButton.addEventListener('click', () => {
    /* remove any undeleted classes, added by previous button's onclick callback. */
    removeClassFromNodeList(wheels, "move-forward");
    // Add class which moves the cycle wheels backward.
    addClassToNodeList(wheels, "move-backward");

    cycleContainer.classList.add("move-container-left");

    // Clear the class after first iteration of the animation ends
    setTimeout(() => {
        removeClassFromNodeList(wheels, "move-backward");
        cycleContainer.classList.remove("move-container-left");
    }, 3500);
});

prevButton.addEventListener('click', () => {
    /* remove any undeleted classes, added by next button's onclick callback. */
   removeClassFromNodeList(wheels, "move-backward");
   // Add class which moves the cycle wheels forward.
   addClassToNodeList(wheels, "move-forward");

   cycleContainer.classList.add("move-container-right");

   // Clear the class after first iteration of the animation ends
   setTimeout(() => {
    removeClassFromNodeList(wheels, "move-forward");
    cycleContainer.classList.remove("move-container-right");
}, 3500);
});