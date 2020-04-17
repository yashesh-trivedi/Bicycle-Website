let nextButton = document.getElementById("next-btn");
let prevButton = document.getElementById("prev-btn");
let wheels = document.querySelectorAll(".wheel");


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
    /* removing the move-forward class from each element of nodelist,
       in case where prev button is clicked and after that instantly 
       next button is clicked, before the timeout callback is called. */
    removeClassFromNodeList(wheels, "move-forward");
    // Add class which moves the cycle wheels backward.
    addClassToNodeList(wheels, "move-backward");
    // Clear the class after first iteration of the animation ends
    setTimeout(() => removeClassFromNodeList(wheels, "move-backward"), 3500);
});

prevButton.addEventListener('click', () => {
    /* removing the move-backward class from each element of the nodelist,
       in case where next button is clicked and after that instantly 
       previous button is clicked, before the timeout callback was called. */
   removeClassFromNodeList(wheels, "move-backward");
   // Add class which moves the cycle wheels forward.
   addClassToNodeList(wheels, "move-forward");
   // Clear the class after first iteration of the animation ends
   setTimeout(() => removeClassFromNodeList(wheels, "move-forward"), 3500);
});