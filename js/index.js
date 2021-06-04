// Your code goes here

//Sign Me Up! button click
const signMeUp = document.querySelectorAll(".destination .btn");
console.log("signMeUp", signMeUp);
signMeUp.forEach((element) => {
  element.addEventListener("click", (event) => {
    //do something when button is clicked
    console.log("Someone clicked me!");
  });
});

const section = document.querySelectorAll("section");
section.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "#FFF0F5";
  });
  element.addEventListener("mouseout", () => {
    element.style.backgroundColor = "";
  });
});
