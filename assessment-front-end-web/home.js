///grab the element you want to manipulate
let rubberDuck = document.querySelector("img");

//build our callback function to determine our action
function complimentDuck (rubberDuck){
    alert("Duckies says YOU ARE AMAZING!")
}

//combine both using eventListener
rubberDuck.addEventListener('mouseover', complimentDuck)