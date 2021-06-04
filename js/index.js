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
