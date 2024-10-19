/* 
1. if list element is clicked
   a. add class .selected
   b. store the number of that element

2. if submit is clicked, and a value has been clicked, 
   a. shift into thanks state by removing class .hidden
   b. incorporate stored value into output
*/

const rate = document.querySelectorAll(".rating");
const sub = document.getElementById("submit");
const state1 = document.getElementById("rateState");
const state2 = document.getElementById("thankState");

let place = document.getElementById("place");

let value = "";

rate.forEach(rating => {
    rating.addEventListener("click", function() {
      rate.forEach((ra) => ra.classList.remove("selected"));
        this.classList.add("selected");
        value = this.textContent;
    })
})

sub.addEventListener("click", function() {
   if(value === "") {
      alert("Please enter a rating!");
   } else {
      state1.classList.add("hidden");
      state2.classList.remove("hidden");
      place.textContent = value;
   }
})
