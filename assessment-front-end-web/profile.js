console.log("profile js connection check!")


//grab the element to be manipulated

let colorBtn = document.querySelector("#color")
let placeBtn = document.querySelector("#place")
let ritualBtn = document.querySelector("#ritual")

//create a callback function

const colorAlert = () => {
    alert("Blue!")
}

const placeAlert = () => {
    alert("Home!")
}

const ritualAlert = () => {
    alert("reflections!")
}

//combine the two steps above in an addventlistener!

colorBtn.addEventListener('click',(colorAlert) )
placeBtn.addEventListener('click', (placeAlert) )
ritualBtn.addEventListener('click', (ritualAlert) )