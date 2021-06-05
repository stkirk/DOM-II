// Your code goes here

//Sign Me Up! button click
const signMeUp = document.querySelectorAll(".destination .btn");
console.log("signMeUp", signMeUp);
signMeUp.forEach((element) => {
  element.addEventListener("click", (e) => {
    //do something when button is clicked
    console.log("Someone clicked me!");
    textField.focus();
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

//Wheel makes images bigger, click back to normal
const images = document.querySelectorAll("section img");
console.log("images", images);

images.forEach((element) => {
  element.addEventListener("wheel", (e) => {
    element.style.transform = "scale(1.5, 1.5)";
  });
  element.addEventListener("click", (e) => {
    element.style.transform = "scale(1, 1)";
  });
});

// double click footer
const footer = document.querySelector("footer");
const footerP = document.querySelector("footer p");

footer.addEventListener("dblclick", (e) => {
  //   console.log("footer");
  footerP.style.fontSize = "5rem";
});

//click footer, fontsize back to normal
footer.addEventListener("click", (e) => {
  //   console.log("footer");
  footerP.style.fontSize = "";
});

//create text input, flip above image when focused on

//create textfield
const textField = document.createElement("input");
textField.type = "text";
textField.style.margin = "2%";
console.log("text field", textField);

//add text input to content-destination section
const destinationContent = document.querySelector(".content-destination");
destinationContent.appendChild(textField);

//focus on text input flips above image
const destinationImage = document.querySelector(".content-destination img");
textField.addEventListener("focus", (e) => {
  destinationImage.style.transform = "rotate(180deg)";
});

//blur text input
textField.addEventListener("blur", (e) => {
  e.target.style.backgroundColor = "pink";
});

//paste event in text input
textField.addEventListener("paste", (e) => {
  alert("NO PASTING ALLOWED, TRY AGAIN FOOL...MUAHAHAHAHAHAHAHA");
});

//copy event
document.addEventListener("copy", (e) => {
  alert("Please Do not copy me");
});

//load event
window.addEventListener("load", (e) => {
  textField.focus();
});
