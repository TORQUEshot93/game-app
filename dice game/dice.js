var randomnumber1 = Math.floor(Math.random()*6 + 1);//1-6
var randomdiceimage = "dice" + randomnumber1 + ".png";//dice1.png-dice6.png
var randomimagesource = "images/" + randomdiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomimagesource);



var randomnumbe2 = Math.floor(Math.random()*6 + 1);
var randomimagesource2 = "images/dice" + randomnumbe2 + ".png";

 var image2 = document.querySelectorAll("img")[1];
 image2.setAttribute("src",randomimagesource2);

 if (randomnumber1 > randomnumbe2) {
 	document.querySelector("header").innerHTML="Play1 Win!";
 }
 else if (randomnumber1 < randomnumbe2) {
 	document.querySelector("header").innerHTML="Play2 Win!";
 }else{
 	document.querySelector("header").innerHTML="Draw!";
 }
 // Create a new button element
const refreshButton = document.getElementById("button");


// Set the button's properties
refreshButton.innerHTML = "Play";
refreshButton.onclick = function() {
  location.reload();
};

// Add the button to the page
document.body.appendChild(refreshButton);

function changeColor() {
    button.style.backgroundColor = "blue";
}