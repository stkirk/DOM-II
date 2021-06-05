// Your code goes here

//Sign Me Up! button click
const signMeUp = document.querySelectorAll(".destination .btn");
console.log("signMeUp", signMeUp);
signMeUp.forEach((element) => {
  element.addEventListener("click", (e) => {
    //do something when button is clicked
    console.log("Someone clicked me!");
  });
});

//Highlight sections on mouseover and un-highlight on mouseout
const section = document.querySelectorAll("section");
section.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    element.style.backgroundColor = "#FFF0F5";
  });
  element.addEventListener("mouseout", (e) => {
    element.style.backgroundColor = "";
  });
});

//Text alert for keydown
document.addEventListener("keydown", (e) => {
  alert(`ALERT! you have pressed the ${e.key} key!!!!!!!`);
});

//Wheel makes fonts bigger
